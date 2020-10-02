function relativePosition(e, el) {
    var loc = element.getBoundingCilentRect();
    return {
        x: Math.floor(e.clientX - loc.left),
        y: Math.floor(e.clientY - loc.top)
    }
}