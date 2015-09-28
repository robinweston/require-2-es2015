define(['exports', 'module', 'lodash'], function (exports, module, _lodash) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _2 = _interopRequireDefault(_lodash);

    module.exports = function ($scope, questionService) {

        var questions = questionService.getQuestions();
        var filteredQuestions = _2['default'].pick(questions, function (value, key) {
            return value.id < 3;
        });

        $scope.questions = filteredQuestions;
    };
});
