/// <reference path="_all.ts" />
module SPMovies {
    export interface IMovieScope extends ng.IScope {
        mensagemLista: string;
        movies: MoviesController;
    }
}