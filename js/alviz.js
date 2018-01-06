var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setTabSize(2);
editor.isVim = false;



// global variable for artist canvas
var cv = $("#artistcanvas")[0];
var ctx = cv.getContext("2d");

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
  var result;
  try {
    result = eval(editor.getValue());
  } catch (e) {
    $("#errorModal .modal-body p").text(e);
    $("#errorModal").modal("show");
  }

  output.push(result);
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

function vimToggle() {
  if (!editor.isVim) {
    editor.setKeyboardHandler("ace/keyboard/vim");
    editor.isVim = true;
    $("#vim").text("Vim");
  } else {
    editor.setKeyboardHandler("");
    editor.isVim = false;
    $("#vim").text("Vim?");
  }
}

// bind click action on editor
$("#run").bind("click", run);
$("#help").bind("click", help);
$("#vim").bind("click", vimToggle);
// bind short keys action on editor
$(document).keydown((event) => {
    if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
      run();
    } else if (event.keyCode == 191 && event.ctrlKey) {
      help();
    } else if (event.keyCode == 190 && event.ctrlKey) {
      vimToggle();
    };
});




function error() {
  $("#errorModal").modal('show');
}

// load file content to editor
function load() {
  // construct new path by looking at its text
  // note `this` is bound to the li being clicked
  var currentFile = $(this).text() + ".js";
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
    $("#cvtype").text("Turtle");
  }
  else {
    $("#turtlecanvas").toggle(false);
    $("#artistcanvas").toggle(true);
    $("#cvtype").text("Artist");
  }
}

$("#turtlebox").click(toggleCanvas);




// Artist mode public API
function areset() {
  // reset artist mode
  ctx.clearRect(0, 0, cv.width, cv.height);
  console.log('Artist Mode has been reset!')
};


function download(path) {
  // download and execute an external js file
  $.getScript(path)
    .done(function(){
      $("#successModal").modal('show');
    })
    .fail(function(){
      $("#errorModal").modal('show');
  })
};


function acv() {
  return cv;
}

function actx() {
  return ctx;
}