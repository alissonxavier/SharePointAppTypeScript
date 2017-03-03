/// <reference path="_all.ts" />
var SPMovies;
(function (SPMovies) {
    var MoviesController = (function () {
        // Dependency injection via construstor
        function MoviesController($scope) {
            this.$scope = $scope;
            $scope.mensagemLista = 'Olá Mundo';
            $scope.movies = this;
        }
        MoviesController.prototype.allMovies = function () {
            alert('OK');
            toastr["success"]("Resultado Efetuado com sucesso.", "OK");
        };
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        MoviesController.$inject = [
            '$scope'
        ];
        return MoviesController;
    }());
    SPMovies.MoviesController = MoviesController;
})(SPMovies || (SPMovies = {}));
