import React from "react";
//film bilgilerini props olarak göndericez.
//movie bilgilerini state 'in içerisinde oldugu için movies ={this.state.movies} props şeklinde state bilgisi gönderdim.
//bu stateleri yakalamam gerek.
//movies bir array. map fonksiyonunu kullanıcaz.
//

const MovieList = (props) => {

    return (
        <div className="row">

            {/*array e map uyguladığımız zaman key vermek zorundayız. componenti silerken hangi keye göre siliyor. */}
            {props.movies.map((movie) => (
                <div className="col-lg-4" key={movie.id}> {/*each child in a list should have unique key. */}
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top"
                            alt="movie img" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h5><span className="badge bg-info">{movie.rating}</span></h5>
                            </div>

                        </div>

                    </div>

                </div>
            ))}



        </div>
    )

}


export default MovieList;