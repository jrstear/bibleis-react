import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { 
    getBookList,
    selectBook,
    selectChapter
} from './actions';
import BookListItem from '../../components/BookListItem';

class BookList extends Component {
    componentWillMount() {
        if (this.props.books.all.length <= 0) {
            this.props.getBookList('ENGESV');
        }
    }

    onBookPress = (book) => {
        // Save the selected book
        this.props.selectBook(book);
    };

    onItemPress = (book, chapter) => {
        // Save the selected book and chapter
        this.props.selectChapter(book, chapter);

        // Run the callback function passed by the parent
        this.props.onItemPress();
    };

    listKeyExtractor = (item) => {
        // "item" represents an individual book
        return item.book_id;
    };

    listRenderItem = ({ item }) => (
        // "item" represents an individual book
        <BookListItem
            id={item.book_id}
            onBookPress={() => this.onBookPress(item)}
            onItemPress={this.onItemPress}
            selected={this.props.books.selectedBook.book_id === item.book_id}
            book={item}
        />
    );

    displayBookList = () => {
        // If there are books loaded,
        // display them in a list
        if (this.props.books.all.length > 0) {
            return (
                <FlatList
                    data={this.props.books.all}
                    extraData={this.props.books.selectedBook}
                    keyExtractor={this.listKeyExtractor}
                    renderItem={this.listRenderItem}
                />
            );
        }

        return null;
    }
    
    render() {
        return this.displayBookList();
    }
}

const mapStateToProps = (state) => {
    const { books } = state;
    return { books };
};

export default connect(mapStateToProps, { 
    getBookList, selectBook, selectChapter })(BookList);
