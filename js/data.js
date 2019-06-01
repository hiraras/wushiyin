const wordList = [
    { "spell": "a", [PING_JIA]: "あ", [PIAN_JIA]: "ア" },
    { "spell": "i", [PING_JIA]: "い", [PIAN_JIA]: "イ" },
    { "spell": "u", [PING_JIA]: "う", [PIAN_JIA]: "ウ" },
    { "spell": "e", [PING_JIA]: "え", [PIAN_JIA]: "エ" }, 
    { "spell": "o", [PING_JIA]: "お", [PIAN_JIA]: "オ" }, 
    { "spell": "ka", [PING_JIA]: "か", [PIAN_JIA]: "カ" }, 
    { "spell": "ki", [PING_JIA]: "き", [PIAN_JIA]: "キ" }, 
    { "spell": "ku", [PING_JIA]: "く", [PIAN_JIA]: "ク" }, 
    { "spell": "ke", [PING_JIA]: "け", [PIAN_JIA]: "ケ" }, 
    { "spell": "ko", [PING_JIA]: "こ", [PIAN_JIA]: "コ" }, 
    { "spell": "sa", [PING_JIA]: "さ", [PIAN_JIA]: "サ" }, 
    { "spell": "shi", [PING_JIA]: "し", [PIAN_JIA]: "シ" }, 
    { "spell": "su", [PING_JIA]: "す", [PIAN_JIA]: "ス" }, 
    { "spell": "se", [PING_JIA]: "せ", [PIAN_JIA]: "セ" }, 
    { "spell": "so", [PING_JIA]: "そ", [PIAN_JIA]: "ソ" }, 
    { "spell": "ta", [PING_JIA]: "た", [PIAN_JIA]: "タ" }, 
    { "spell": "chi", [PING_JIA]: "ち", [PIAN_JIA]: "チ" }, 
    { "spell": "tsu", [PING_JIA]: "つ", [PIAN_JIA]: "ツ" }, 
    { "spell": "te", [PING_JIA]: "て", [PIAN_JIA]: "テ" }, 
    { "spell": "to", [PING_JIA]: "と", [PIAN_JIA]: "ト" }, 
    { "spell": "na", [PING_JIA]: "な", [PIAN_JIA]: "ナ" }, 
    { "spell": "ni", [PING_JIA]: "に", [PIAN_JIA]: "ニ" }, 
    { "spell": "nu", [PING_JIA]: "ぬ", [PIAN_JIA]: "ヌ" }, 
    { "spell": "ne", [PING_JIA]: "ね", [PIAN_JIA]: "ネ" }, 
    { "spell": "no", [PING_JIA]: "の", [PIAN_JIA]: "ノ" }, 
    { "spell": "ha", [PING_JIA]: "は", [PIAN_JIA]: "ハ" }, 
    { "spell": "hi", [PING_JIA]: "ひ", [PIAN_JIA]: "ヒ" }, 
    { "spell": "fu", [PING_JIA]: "ふ", [PIAN_JIA]: "フ" }, 
    { "spell": "he", [PING_JIA]: "へ", [PIAN_JIA]: "ヘ" }, 
    { "spell": "ho", [PING_JIA]: "ほ", [PIAN_JIA]: "ホ" }, 
    { "spell": "ma", [PING_JIA]: "ま", [PIAN_JIA]: "マ" }, 
    { "spell": "mi", [PING_JIA]: "み", [PIAN_JIA]: "ミ" }, 
    { "spell": "mu", [PING_JIA]: "む", [PIAN_JIA]: "ム" }, 
    { "spell": "me", [PING_JIA]: "め", [PIAN_JIA]: "メ" }, 
    { "spell": "mo", [PING_JIA]: "も", [PIAN_JIA]: "モ" }, 
    { "spell": "ya", [PING_JIA]: "や", [PIAN_JIA]: "ヤ" }, 
    { "spell": "yu", [PING_JIA]: "ゆ", [PIAN_JIA]: "ユ" }, 
    { "spell": "yo", [PING_JIA]: "よ", [PIAN_JIA]: "ヨ" }, 
    { "spell": "ra", [PING_JIA]: "ら", [PIAN_JIA]: "ラ" }, 
    { "spell": "ri", [PING_JIA]: "り", [PIAN_JIA]: "リ" }, 
    { "spell": "ru", [PING_JIA]: "る", [PIAN_JIA]: "ル" }, 
    { "spell": "re", [PING_JIA]: "れ", [PIAN_JIA]: "レ" }, 
    { "spell": "ro", [PING_JIA]: "ろ", [PIAN_JIA]: "ロ" }, 
    { "spell": "wa", [PING_JIA]: "わ", [PIAN_JIA]: "ワ" }, 
    { "spell": "wo", [PING_JIA]: "を", [PIAN_JIA]: "ヲ" }, 
    { "spell": "nn", [PING_JIA]: "ん", [PIAN_JIA]: "ン" },
];

const pingjiaList = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん"
];

const pianjiaList = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ヤ", "ユ", "ヨ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ワ", "ヲ", "ン"
];

const spellList = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "shi", "su", "se", "so",
    "ta", "chi", "tsu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "fu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya", "yu", "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa", "wo", "nn"
];
