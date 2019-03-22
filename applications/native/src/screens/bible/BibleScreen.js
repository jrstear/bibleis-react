import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getChapterText } from './actions';
import { 
    getBookList,
    selectChapter } from '../../actions';
import BibleText from '../../components/BibleText';
import BibleToolbar from '../../containers/BibleToolbar';
import { getVersionFilesetId } from '../../utils/helpers';

class BibleScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: '',
            drawerLabel: 'Bible',
            headerRight: (
                <BibleToolbar
                    onPressPassage={() => navigation.navigate('PassageSelect')}
                    onPressVersion={() => navigation.navigate('VersionSelect')}
                />
            )
        };
    };

    checkForBibleText = () => {
        let versionTextId = null;

        // Get the selected version's fileset ids
        if (this.props.selectedVersion != null) {
            versionTextId = getVersionFilesetId(this.props.selectedVersion, 'text_plain');
        }

        // If text is available, get it
        if (versionTextId != null) {
            // If the available books for this fileset
            // have not been loaded, get them
            if (this.props.books.all.length <= 0) {
                this.props.getBookList(versionTextId);            
            }
    
            // Get the chapter's text
            if (this.props.books.selectedBook != null &&
                    this.props.books.selectedChapter !== 0) {
                this.props.getChapterText(versionTextId, 
                    this.props.books.selectedBook.book_id, this.props.books.selectedChapter);
            }
        }
    };

    displayBibleText = () => {
        this.checkForBibleText();
        
        if (this.props.bible.verses.length > 0) {
            return (
                <BibleText
                    verses={this.props.bible.verses}
                />
            );
        }

        return null;
    };
    
    render() {
        return (
            <View>
                {this.displayBibleText()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { bible, books } = state;
    const selectedVersion = state.versions.selected;

    return { bible, books, selectedVersion };
};

export default connect(mapStateToProps, { 
    getChapterText, getBookList, selectChapter })(BibleScreen);
