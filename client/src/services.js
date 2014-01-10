app.factory('deckMethods', [function () {

  var deck;
  var discard;
  var card = function (artUrl, text, power, level) {
    this.art = artUrl;
    this.text = text;
    this.power = power;
    this.level = level;
  };
  
  return {
    buildDeck: function (array) {
      deck = array;
    },
    getDeck: function () {
      return deck;
    },
    draw: function () {
    },
    getDiscard: function () {
      return discard;
    },
    discard: function (card) {
      discard.push(card);
    },
    reshuffle: function () {
      
    },
    getHand: function (size, number) {
      // oh who cares, doing this the lazy way.
      // may change if only just for fun.
      size = size || 5;
      number = number || 1;
      var hands = [];
      for (var i = 0; i < number; i++) {
        var hand = deck.splice(0, size);
        hands = number > 1 ? hands.concat(hand) : hand;
      }
      return hands;
    }
  };
}]);