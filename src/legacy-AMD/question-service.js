define([], function() {
	return function () {
        var getQuestions = function() {
    		return [
    			{ 
    				id: 1,
    				name: "Question 1",
    				question: "How old are you?"
    			},
    			{ 
    				id: 2,
    				name: "Question 2",
    				question: "What kinda modules you like?"
    			},
    			{ 
    				id: 3,
    				name: "Question 3",
    				question: "Is this question showing?"
    			}
    		];
        }

        return {
        	getQuestions: getQuestions
        };
    };
});