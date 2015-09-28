import _ from 'lodash';
    
class QuestionController {

	/*@ngInject*/
	constructor($scope, questionService) {
		let questions = questionService.getQuestions();
		let filteredQuestions = _.pick(questions, function(value, key) {
			return value.id < 3;
		});

		$scope.questions = filteredQuestions;
	}
}

export default QuestionController;
