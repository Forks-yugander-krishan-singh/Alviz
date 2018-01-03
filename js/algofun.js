var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setTabSize(2);

// a trick to redirect console log from eval
var output = [];
console.oldLog = console.log;
console.log = function(value) {
  console.oldLog(value);
  output.push(value);
};

// get output
function run() {
  output = [];
  output.push(eval(editor.getValue()));
  $("#output").text("");
  for (let i = 0; i < output.length; i++) {
    if (output[i] !== undefined) {
      $("#output").append("&nbsp >> &nbsp" + output[i] + "<br>");
    }
  }
}

function help() {
  $("#helpModal").modal("show")
}

// bind click action on editor
$("#run").bind("click", run);
$("#help").bind("click", help);
// bind short keys action on editor
$(document).keydown((event) => {
    if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
      run();
    } else if (event.keyCode == 191 && event.ctrlKey) {
      help();
    };
});




function error() {
  $("#errorModal").modal('show');
}

// load file content to editor
function load() {
  // construct new path by looking at its own id
  // note `this` is bound to the li being clicked
  var currentFile = $(this).attr("id") + ".js";
  var newPath = window.location.protocol
                + "//"
                + window.location.host
                + "/"
                + "AlgoFun/algos"
                + "/"
                + currentFile;
  var jqxhr = $.get(newPath, function(data) {
      editor.setValue(data);
  })
    .fail(function() {
      error();
  });
}

// autochecked or unchecked box in response to
// file loaded into the editor
function autocheck(li) {
  var algoType = li.attr("name");
  console.log('my algotype is ' + algoType);
  if (algoType == "turtle") {
    $("#turtlebox").prop("checked", true);
  } else {
    $("#turtlebox").prop("checked", false);
  }
}

function checkAndToggle() {
  autocheck($(this));
  toggleCanvas();
}

// bind action algorithms
// 2 things happened when loading an algorithm into editor
// first is load to the editor
// second is decide the appropriate canvas to operate on
$("#algorithms").on('click', 'li', load)
                .on('click', 'li', checkAndToggle);


// bind toggle for turtle canvas
function toggleCanvas(){
  var ckb = $("#turtlebox").is(':checked');
  if (ckb) {
    $("#turtlecanvas").toggle(true);
    $("#artistcanvas").toggle(false);
  }
  else {
    $("#turtlecanvas").toggle(false);
    $("#artistcanvas").toggle(true);
  }
}

$("#turtlebox").click(toggleCanvas);


// algofun public API
var resetAll = function() {
  //reset all canvases
  reset();
  cv = $("#artistcanvas")[0];
  ctx = cv.getContext("2d");
  ctx.clearRect(0, 0, cv.width, cv.height);
  console.log('All canvases have been reset!')
};

