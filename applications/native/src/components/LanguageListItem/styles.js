import { StyleSheet } from 'react-native';
import {
    COLOR_BRAND_BLACK,
    COLOR_BRAND_BLUE,
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
    }
});
