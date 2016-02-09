define(function (require, exports, module) {module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

});
