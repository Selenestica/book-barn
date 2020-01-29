import React, {Component} from 'react'

class Body extends Component {

    render() {

        let bookList = this.props.books.map((book) => {
            return (<>
            <div className="books-div">
                <div className="img-div">
                    <img src="book-image.jpeg" />
                </div>
                <div className="book-title-div" key={`${book.pages}${book.author}${book.title}${book.link}`}>   
                    <p>{book.title}</p>
                </div>
            </div>
            </>)
        })

        return (<>
                <h3>BEST BOOKS OF THE MONTH</h3>
                <div className="book-list-container">
                    {bookList}
                </div>
                <div className="book-list-container">
                    {bookList}
                </div>
        </>)
    }

}

export default Body