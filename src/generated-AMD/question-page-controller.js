define(["../../bower_components/lodash/dist/lodash"], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {default: $__0};
  var _ = $__0.default;
  var $__default = function($scope, questionService) {
    var questions = questionService.getQuestions();
    var filteredQuestions = _.pick(questions, function(value, key) {
      return value.id < 3;
    });
    $scope.questions = filteredQuestions;
  };
  return {
    get default() {
      return $__default;
    },
    __esModule: true
  };
});
