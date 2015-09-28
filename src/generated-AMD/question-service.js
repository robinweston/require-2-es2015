define(["exports", "module"], function (exports, module) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var QuestionsService = (function () {
        function QuestionsService() {
            _classCallCheck(this, QuestionsService);
        }

        _createClass(QuestionsService, [{
            key: "getQuestions",
            value: function getQuestions() {
                return [{
                    id: 1,
                    name: "Question 1",
                    question: "How old are you?"
                }, {
                    id: 2,
                    name: "Question 2",
                    question: "What kinda modules you like?"
                }, {
                    id: 3,
                    name: "Question 3",
                    question: "Is this question showing?"
                }];
            }
        }]);

        return QuestionsService;
    })();

    module.exports = QuestionsService;
});
