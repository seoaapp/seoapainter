function createCanvas(cWidth, cHeight) {
    let canvas = elt("canvas", { width: cWidth, height: cheight });
    let ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid black"
    canvas.style.cursor = "pointer"
    canvas.addEventListener("mousedown", function (e) {
        //�� ���̾����� ���ϱ� �ʿ�
        let event = document.createEvent("HTMLevents")
        event.initEvent("change", false, true)
        colorInput.dispatchEvent(event);
        paintTools[paintTool](e, ctx);
    }, false);
    return [canvas, ctx];
}