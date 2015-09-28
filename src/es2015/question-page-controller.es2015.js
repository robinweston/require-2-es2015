import _ from 'lodash';
    
    export default function($scope, questionService) {

    	var questions = questionService.getQuestions();
    	var filteredQuestions = _.pick(questions, function(value, key) {
		  return value.id < 3;
		});

		$scope.questions = filteredQuestions;
    }

