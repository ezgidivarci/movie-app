import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";

class App extends React.Component {

    state = { //state bir obje onun içerisindeki array movies de property şeklinde gelicek oyüzden : iki nokta 
        movies: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },

            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },

            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            }
        ]
    }

    deleteMovie = (movie) => {
        //bir filmi sildigimde kalan filmler için yeni bir liste olusturcam.
        //silinen in id.sini almayacak sekilde filtrelicem.
        // o basılan id.ye (event) eşit olmayan movie idleri getir.
        // setState ile yeni Listeyi = movies e aticam.
        //onClick içinde bu fonksiyonu kullanabilmek için props olarak tanımlıyorum.

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState({
            movies: newMovieList
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />

                    </div>

                </div>
                <MovieList movies={this.state.movies} deleteMovieProp={this.deleteMovie} />
                {/*componentlar arası işlemler arttıgında karisiklik oldugu için: context API , redux */}
            </div>
        )
    }
}




export default App;