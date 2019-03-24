function createSpell() {
    var row = ['a', 'i', 'u', 'e', 'o'];
    var col = ['', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w'];
    var list = col.map(val => {
        return row.map(v => {
            return val + v;
        })
    });
    
    list = list.flat().map(v => {
        if (v === 'si') return 'shi';
        if (v === 'ti') return 'chi';
        if (v === 'tu') return 'tsu';
        if (v === 'hu') return 'fu';
        if (v === 'yi') return '';
        if (v === 'ye') return '';
        if (v === 'wi') return '';
        if (v === 'wu') return '';
        if (v === 'we') return '';
    
        return v;
    }).filter(v => !!v);
    list.push('nn');
    
    console.log(list);
    return list;
}

function splitPianjia() {
    var str = `ア (a) カ(ka) サ(sa) タ(ta) ナ(na) ハ(ha) マ(ma)
        イ (i) キ(ki) シ(shi) チ(chi) ニ(ni) ヒ(hi) ミ(mi)
        ウ (u) ク(ku) ス(su) ツ(tsu) ヌ(nu) フ(fu) ム(mu)
        エ (e) ケ(ke) セ(se) テ(te) ネ(ne) ヘ(he) メ(me)
        オ (o) コ(ko) ソ(so) ト(to) ノ(no) ホ(ho) モ(mo)
        ヤ(ya) ワ(wa) ン(n)
        ユ(yu)
        ヨ(yo) ヲ(wo)`;

    var reg = /[\u3040-\u309F\u30A0-\u30FF]/g;
    console.log(str.match(reg));
}

function createPianjia() {
    var pianjiaList = [
        ["ア", "カ", "サ", "タ", "ナ", "ハ", "マ"], 
        ["イ", "キ", "シ", "チ", "ニ", "ヒ", "ミ"], 
        ["ウ", "ク", "ス", "ツ", "ヌ", "フ", "ム"], 
        ["エ", "ケ", "セ", "テ", "ネ", "ヘ", "メ"], 
        ["オ", "コ", "ソ", "ト", "ノ", "ホ", "モ"], 
    ];
    var newList = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    ];

    for (let i = 0; i < pianjiaList.length; i++) {
        for (let j = 0; j < pianjiaList[0].length; j++) {
            newList[j][i] = pianjiaList[i][j];
        }
    }
    newList = newList.flat()
    newList.push('ヤ');
    newList.push('ユ');
    newList.push('ヨ');
    ['ラ', 'リ', 'ル', 'レ', 'ロ'].map(v => {
        newList.push(v);
    });
    newList.push('ワ');
    newList.push('ヲ');
    newList.push('ン');
    return newList;
}

function createWordList(spellList, pingjiaList, pianjiaList) {
    var newList = [];
    for(let i = 0; i < 46; i += 1) {
        var obj = {
            spell: spellList[i],
            pingjia: pingjiaList[i],
            pianjia: pianjiaList[i],
        };
        newList.push(obj);
    }
    var str = JSON.stringify(newList);
    console.log(str);
    return str;
}
