import _ from '../../bower_components/lodash/dist/lodash';
   
export function createQuestionController($scope, questionService) {

	var questions = questionService.getQuestions();
	var filteredQuestions = _.pick(questions, function(value, key) {
	  return value.id < 3;
	});

	$scope.questions = filteredQuestions;
}