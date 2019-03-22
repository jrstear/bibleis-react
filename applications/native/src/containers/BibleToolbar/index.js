import React, { Component } from 'react';
import { Share, View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import PassageSelector from '../../components/PassageSelector';
import VersionSelector from '../../components/VersionSelector';
import ShareButton from '../../components/ShareButton';

class BibleToolbar extends Component {
    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
    
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            // TODO
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <PassageSelector
                    book={this.props.bible.book}
                    chapter={this.props.bible.chapterId}
                    onPress={this.props.onPressPassage}
                />
                <VersionSelector
                    onPress={this.props.onPressVersion}
                />
                <ShareButton
                    onPress={this.onShare} 
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { bible } = state;
    return { bible };
};

export default connect(mapStateToProps)(BibleToolbar);
