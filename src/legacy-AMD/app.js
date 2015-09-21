"use strict";

define(["angular", "question-page-controller", "question-directive", "question-service"], function (angular, questionPageController, questionDirective, questionService) {

        var init = function () {
            var app = angular.module('SampleApp');

            app.controller('questionPageController', ["questionsService", questionPageController]);
            app.directive('questionDirective', [questionDirective]);
            app.service('questionService', [questionDirective]);

            return app;
        };

        var bootstrap = function (app) {
            angular.bootstrap(angular.element(document.querySelector('#angular-app')), ['SampleApp']);
        };

        return {
            init: init,
            bootstrap: bootstrap
        };
    });
