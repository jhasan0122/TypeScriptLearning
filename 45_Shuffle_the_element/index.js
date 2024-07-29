var cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);
console.log(cards);
function shuffle(array) {
    var _a;
    for (var i = array.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        _a = [array[randomIndex], array[i]], array[i] = _a[0], array[randomIndex] = _a[1];
    }
}
