var SPMovies;
(function (SPMovies) {
    var Movies = (function () {
        function Movies() {
        }
        Movies.prototype.getById = function (id) {
            var movie = new Movie();
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
