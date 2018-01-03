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

$("#run").bind("click", run);
$("#editor").keydown((e) => {
  if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
  run();
}
});

