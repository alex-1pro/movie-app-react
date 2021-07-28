import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class MovieModel {
    constructor(movieName, lengthInMinutes, poster, director, mainStars) {
        this.movieName = movieName;
        this.lengthInMinutes = lengthInMinutes;
        this.poster = poster;
        this.director = director;
        this.mainStars = mainStars;
    }
}

export default MovieModel;