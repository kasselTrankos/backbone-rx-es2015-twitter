define(function (require, exports, module) {module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

});
