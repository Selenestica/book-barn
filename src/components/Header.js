import React, {Component} from 'react'

class Header extends Component {

    render() {
        return(<>

                <div id="header-div">
                    <div id="logo-div">
                        <a id="logo" className="header-links">Book Barn</a>
                    </div>
                    <a className="header-links">My Books</a>
                    <a className="header-links">Browse</a>
                    <a className="header-links">Community</a>
                    <a className="header-links">Search</a>
                    <a className="header-links">Sign In</a>
                    <a className="header-links">Join</a>
                </div>

        </>)
    }
}

export default Header