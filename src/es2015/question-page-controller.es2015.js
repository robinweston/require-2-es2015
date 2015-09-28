import _ from 'lodash';
    
class QuestionController {

	constructor($scope, questionService) {
		var questions = questionService.getQuestions();
		var filteredQuestions = _.pick(questions, function(value, key) {
			return value.id < 3;
		});

		$scope.questions = filteredQuestions;
	}
}

export default QuestionController
