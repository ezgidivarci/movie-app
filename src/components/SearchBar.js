import React from "react";
//onChange={(event)=> console.log(event.target.value)}
//her bir harf girdigimde konsola yazdiriyor bunu state e donusturcez.
//her bir harf girildiginde state guncellensin.
// value artık react tarafından kontrol edilen bir form elemanı.
//onSubmit search alanına kelime yazıp enter a bastığımda sayfa yenilendi
//yenilenmemesi için: event.preventDefault(); varsayılanı önle.
class SearchBar extends React.Component {

    // state = {
    //     searchQuery: ""
    // }

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-row mb-5">
                        <div className="col-12">
                            <input onChange={this.props.searchMovieProp} type="text" className="form-control" placeholder="Search a movie"></input> {/* value="" degerini dinamik hale getirmek için */}

                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;