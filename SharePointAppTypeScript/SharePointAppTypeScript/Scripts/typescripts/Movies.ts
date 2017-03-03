/// <reference path="../typings/sharepoint/sharepoint.d.ts" />
/// <reference path="../typings/toastr/toastr.d.ts" />
namespace SPMovies {
    export class Movies {

        constructor() { }

        getAll(): Array<Movie> {

            var movies = new Array<Movie>();

            return movies;
        }

        getById(id: number): Movie {
            var clientContext = SP.ClientContext.get_current();
            var oWebsite = clientContext.get_web();
            var oList = oWebsite.get_lists().getByTitle("Movie");
            var oListItem = oList.getItemById(id);
            clientContext.load(oListItem);
            clientContext.executeQueryAsync(
                successHandler,
                errorHandler
            );

            var movie = new Movie();

            function successHandler() {
                movie.Title    = oListItem.get_item("Title");
                movie.Year     = oListItem.get_item("Year");
                movie.Genre    = oListItem.get_item("Genre");
                movie.Rating   = oListItem.get_item("Rating");
                movie.Synopsis = oListItem.get_item("Synopsis");
                movie.Post = oListItem.get_item("Post");
                toastr["success"]("Resultado Efetuado com sucesso.", "OK");
            }

            function errorHandler() {
                toastr["error"]("Request failed: " + arguments[1].get_message(), "Erro ao buscar o item da lista")
            }

            
            return movie;
        }

    }
    export class Movie {

        constructor() { }

        title: string;
        year: number;
        genre: string;
        rating: number;
        synopsis: string;
        post: string;

        set Title(value: string){
            this.title = value;
        }

        get Title(): string {
            return this.title;
        }

        set Year(value: number) {
            this.year = value;
        }

        get Year(): number {
            return this.year;
        }

        set Genre(value: string) {
            this.genre = value;
        }

        get Genre(): string {
            return this.genre;
        }

        set Rating(value: number) {
            this.rating = value;
        }

        get Rating(): number {
            return this.rating;
        }

        set Synopsis(value: string) {
            this.synopsis = value;
        }

        get Synopsis(): string {
            return this.synopsis;
        }

        set Post(value: string) {
            this.post = value;
        }

        get Post(): string {
            return this.post;
        }


    }
}