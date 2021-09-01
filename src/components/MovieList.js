import React from "react";

class MovieList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg" className="card-img-top"
                            alt="movie img" />
                        <div className="card-body">
                            <h5 className="card-title">sample movie</h5>
                            <p className="card-text">sample movie description</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h5><span className="badge bg-info">9.4</span></h5>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}


export default MovieList;