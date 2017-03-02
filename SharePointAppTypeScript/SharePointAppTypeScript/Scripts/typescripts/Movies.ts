namespace SPMovies {
    export class Movies {

        constructor() { }

        getAll(): Array<Movie> {

            var movies = new Array<Movie>();

            return movies;
        }

        getById(id: number): Movie {
            var movie = new Movie();

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