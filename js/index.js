
var isNewFlag = true; // 下一个是新的单词还是原来的
var currIndex = 0;
var mode = 1;
var direct = 2;

function keyDown(e) {
    switch(e.keyCode) {
        case 38:
            // 上
            changeCurrIndex(0);
            createWord();
            break;
        case 39:
            // 右
            changeCurrIndex(1);
            createWord();
            break;
        case 40:
            // 下
            changeCurrIndex(2);
            createWord();
            break;
        case 37:
            // 左
            changeCurrIndex(3);
            createWord();
            break;
    }
}

function changeCurrIndex(direct) {
    let index = 0;
    if (mode === 0) {
        switch(direct) {
            case 0:
                index = currIndex === 0 ? wordList.length - 1 : currIndex - 1;
                break;
            case 1:
                index = currIndex === wordList.length - 1 ? 0 : currIndex + 1;
                break;
            case 2:
                index = currIndex === wordList.length - 1 ? 0 : currIndex + 1;
                break;
            case 3:
                index = currIndex === 0 ? wordList.length - 1 : currIndex - 1;
                break;
        }
    }
    if (mode === 1) {
        index = getRandom(46);
    }
    if (!isNewFlag) {
        currIndex = index;
    }
    isNewFlag = !isNewFlag;
}

function createWord() {
    const word = wordList[currIndex];
    const content = isNewFlag ? word.spell : word.spell + ' ' + word[PING_JIA] + ' ' + word[PIAN_JIA];
    show(content);
}

function show(content) {
    var showDom = document.getElementById('show');
    showDom.innerHTML = content;
}

(function() {
    document.onkeydown = keyDown;
    keyDown({
        keyCode: 40,
    });
    $('.wushiyin-img').on('click', function() {
        WushiyinModal.info('./assets/images/wushiyin.jpg');
    });
})();

function switchDirect(type) {
    // 修改查看方式: 0为顺序，1为随机
    mode = +type;
    currIndex = mode === 0 ? 0 : getRandom(46);
    isNewFlag = true;
    createWord();
}
