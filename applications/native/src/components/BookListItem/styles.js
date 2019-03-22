import { StyleSheet } from 'react-native';
import {
    COLOR_BRAND_BLACK,
    COLOR_BRAND_BLUE,
    COLOR_BRAND_LIGHT_GRAY,
    FONT_DEFAULT_SIZE
} from '../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20
    },
    titleText: {
        color: COLOR_BRAND_BLACK,
        fontSize: FONT_DEFAULT_SIZE
    },
    titleTextSelected: {
        color: COLOR_BRAND_BLUE,
        fontSize: FONT_DEFAULT_SIZE
    },
    chapterContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    chapterText: {
        backgroundColor: COLOR_BRAND_LIGHT_GRAY,
        width: 50,
        padding: 10,
        marginLeft: 2,
        alignItems: 'center'
    }
});
