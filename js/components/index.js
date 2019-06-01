
// 模块引入(模仿类似es6的import)
function importComponent(componentName) {
    var scriptDom = $('#componentsIndex');
    var newScriptDom = $('<script></script>').attr('src', './js/components/' + componentName + '/index.js');
    scriptDom.after(newScriptDom);
}

$(function() {
    importComponent('WushiyinModal');
});
