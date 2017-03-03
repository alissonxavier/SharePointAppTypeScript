/// <reference path="../typings/sharepoint/sharepoint.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
var SPMovies;
(function (SPMovies) {
    var Movies = (function () {
        function Movies() {
        }
        Movies.prototype.getAll = function () {
            var movies = new Array();
            return movies;
        };
        Movies.prototype.getById = function (id) {
            var clientContext = SP.ClientContext.get_current();
            var oWebsite = clientContext.get_web();
            var oList = oWebsite.get_lists().getByTitle("Movie");
            var oListItem = oList.getItemById(id);
            clientContext.load(oListItem);
            clientContext.executeQueryAsync(successHandler, errorHandler);
            var movie = new Movie();
            function successHandler() {
                movie.Title = oListItem.get_item("Title");
                movie.Year = oListItem.get_item("Year");
                movie.Genre = oListItem.get_item("Genre");
                movie.Rating = oListItem.get_item("Rating");
                movie.Synopsis = oListItem.get_item("Synopsis");
                movie.Post = oListItem.get_item("Post");
                toastr["success"]("Resultado Efetuado com sucesso.", "OK");
            }
            function errorHandler() {
                toastr["error"]("Request failed: " + arguments[1].get_message(), "Erro ao buscar o item da lista");
            }
            return movie;
        };
        return Movies;
    }());
    SPMovies.Movies = Movies;
    var Movie = (function () {
        function Movie() {
        }
        Object.defineProperty(Movie.prototype, "Title", {
            get: function () {
                return this.title;
            },
            set: function (value) {
                this.title = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Movie.prototype, "Year", {
            get: function () {
                return this.year;
            },
            set: function (value) {
                this.year = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Movie.prototype, "Genre", {
            get: function () {
                return this.genre;
            },
            set: function (value) {
                this.genre = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Movie.prototype, "Rating", {
            get: function () {
                return this.rating;
            },
            set: function (value) {
                this.rating = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Movie.prototype, "Synopsis", {
            get: function () {
                return this.synopsis;
            },
            set: function (value) {
                this.synopsis = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Movie.prototype, "Post", {
            get: function () {
                return this.post;
            },
            set: function (value) {
                this.post = value;
            },
            enumerable: true,
            configurable: true
        });
        return Movie;
    }());
    SPMovies.Movie = Movie;
})(SPMovies || (SPMovies = {}));
