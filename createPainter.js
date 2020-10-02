function createPainter(parent, width, height) {
    let title = elt("h2", null, "Seoapainter")
    let tool = elt("div", null)
    let [canvas, ctx] = createCanvas(width, height);
    for (let name in controls) {
        tool.appendChild(controls[name](ctx));
    }
    tool.style.fontSize = "small";
    tool.style.marginBottom = "5px";
    parent.appendChild(elt("div", null, canvas, tool, title));
}
