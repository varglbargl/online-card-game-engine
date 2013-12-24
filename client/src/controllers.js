app
// -- Space Game. For testing purposes and also fun times.
.controller('SpaceGameController', function ($scope, $rootScope, socket, deckMethods) {
  $scope.hand = [];
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