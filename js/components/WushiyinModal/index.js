
var WushiyinModal = {};
$(function() {
    WushiyinModal.info = function(src) {
        var template = '' +
        '<div class="mask">' +
        '    <img src="' + src + '" alt="wushiyin" class="wushiyin-modal-img" />' +
        '</div>';
        appendBody(template);
    }
    function appendBody(template) {
        var bodyDom = $('body');
        var modalContain = $('<div></div>');
        modalContain.attr('id', 'maskContain');
        modalContain.html(template);
        bodyDom.append(modalContain);
        bindEvent();
    }
    function bindEvent() {
        $('.mask').on('click', function() {
            var bodyDom = $('body');
            $('#maskContain').remove();
        });
    }
});
