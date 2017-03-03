/// <reference path="_all.ts" />
var SPMovies;
(function (SPMovies) {
    var app = angular.module('MyAppModule', [])
        .controller('MoviesController', SPMovies.MoviesController);
})(SPMovies || (SPMovies = {}));
