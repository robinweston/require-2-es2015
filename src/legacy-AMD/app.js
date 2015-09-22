"use strict";

define(["angular", "question-page-controller", "question-directive", "question-service"], function (ng, questionPageController, questionDirective, questionService) {

        var init = function () {
            var app = ng.module('SampleApp', []);

            app.controller('questionPageController', ["questionsService", questionPageController]);
            app.directive('questionDirective', [questionDirective]);
            app.service('questionService', [questionDirective]);

            ng.bootstrap(angular.element(document.querySelector('#angular-app')), ['SampleApp']);
        };

        return {
            init: init
        };
    });
