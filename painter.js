function createPainter(parent, width, height) {
  let title = elt("h2", null, "Seoapainter")
  let tool = elt("div", null)
  let [canvas,ctx] = createCanvas(width, height);
  for(let name in controls) {
    tool.appendChild(controls[name](ctx));
  }
  tool.style.fontSize = "small";
  tool.style.marginBottom = "5px";
  parent.appendChild(elt("div", null, title, tool, canvas));
}
function createCanvas(cWidth, cHeight) {
  let canvas = elt("canvas", { width: cWidth, height: cheight });
  let ctx = canvas.getContext("2d");
  canvas.style.border = "1px solid black"
  canvas.style.cursor = "pointer"
  canvas.addEventListener("mousedown", function(e) {
    //난 파이어폭스 쓰니깐 필요
    let event = document.createEvent("HTMLevents")
    event.initEvent("change", false, true)
    colorInput.dispatchEvent(event);
    paintTools[paintTool](e, ctx);
  }, false);
  return [canvas, ctx];
 }
  
