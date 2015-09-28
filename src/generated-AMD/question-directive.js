define([], function() {
  "use strict";
  define([], function() {
    return function() {
      return {
        restrict: "E",
        template: "<div><h2>{{question.name}}</h2><span>{{question.question}}</span></div>",
        scope: {question: "="}
      };
    };
  });
  return {};
});
