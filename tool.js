var paintUtility;
var paintTool = Object.create(null)

paintTool.brush = function (e, ctx) {
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    var nowImage = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
    var position = relativePosition(e, ctx.canvas)
    ctx.beginPath()
    ctx.moveTo(ip.x, ip.y)
    setDragListeners(ctx, nowImage, function (fp) {
        ctx.lineTo(fp.x, fp.y)
        ctx.stroke()
    })
}

paintTool.line = function (e, ctx) {
    ctx.lineCap = "round"
    var nowImage = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
    var position = relativePosition(e, ctx.canvas)
    setDragListeners(ctx, nowImage, function (fp) {
        ctx.moveTo(ip.x, ip.y)
        ctx.lineTo(fp.x, fp.y)
        ctx.stroke()
    })
}

paintTool.circle = function (e, ctx) {
    ctx.lineCap = "round"
    var nowImage = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)
    var position = relativePosition(e, ctx.canvas)
    setDragListeners(ctx, nowImage, function (fp) {
        var dx = fp.x - ip.x
        var dy = fp.y - ip.y
        var r = Math.sqrt(dx * dx + dy * dy)
        ctx.beginPath()
        ctx.arc(ip.x, ip.y, r, 0, 2 * Math.PI, false)
        ctx.stroke()
    })
}