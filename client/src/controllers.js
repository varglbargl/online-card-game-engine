app

// -- Main lobby for making games.

.controller('GameMenuController', function ($scope, $rootStope, deckMethods) {
  $scope.makeNewGame = function () {
    // man i don't know.
  };
})


// -- Space Game. For testing purposes and also fun times.

.controller('SpaceGameController', function ($scope, $rootScope, socket, deckMethods) {
  $scope.hand = [];
  $scope.sampleHand = [
    {artUrl: '', text: 'sample text 5', power: 1, level: 0},
    {artUrl: '', text: 'sample text 1', power: 5, level: 2},
    {artUrl: '', text: 'sample text 3', power: 3, level: 1},
    {artUrl: '', text: 'sample text 4', power: 2, level: 0},
    {artUrl: '', text: 'sample text 2', power: 4, level: 1},
                      ];
  $scope.drawCards = function (amount) {
    $scope.hand.push(sharedCards.drawCards(amount));
    var deck = deckMethods.getDeck;
    socket.emit('update', {deck: deck});
  };
  $scope.useCard = function () {
    $scope.hand.splice($scope.hand.indexOf(this), 1);
    socket.emit('play', {card: this});
  };
});