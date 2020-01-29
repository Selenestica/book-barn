import React, {Component} from 'react' 

class AuthorSearch extends Component {

    render() {
        return(<>
                <div className="author-search-div">
                    <div className="h1-div">
                        <h1>Authors</h1>
                    </div>
                    <div className="form-div">
                        <form>
                            <div>
                                <input className="author-text-box" type="text" placeholder="Search an author by name" />
                            </div>
                            <div>
                                <button id="author-search-button" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>        
        </>)
    }

}

export default AuthorSearch