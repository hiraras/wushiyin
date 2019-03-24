function getRandom(min, max) {
    if (arguments.length === 1) {
        max = arguments[0];
        min = 0;
    }
    if (arguments.length === 0) {
        return 0;
    }
    return Math.floor(Math.random() * (max - min) + min);
}
