angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService', 'TKAnswersService', '$state'
     $scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };
    
    function($scope, TKTestQuestionService) {
    TKTestQuestionService.all();
}]);