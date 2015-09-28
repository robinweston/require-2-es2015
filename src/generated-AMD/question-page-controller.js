define(['exports', 'module', 'lodash', 'angular'], function (exports, module, _lodash, _angular) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _2 = _interopRequireDefault(_lodash);

	var _ng = _interopRequireDefault(_angular);

	var QuestionController =

	/*@ngInject*/
	["$scope", "questionService", function QuestionController($scope, questionService) {
		_classCallCheck(this, QuestionController);

		var questions = questionService.getQuestions();
		var filteredQuestions = _2['default'].pick(questions, function (value, key) {
			return value.id < 3;
		});

		$scope.questions = filteredQuestions;
	}];

	module.exports = QuestionController;
});
