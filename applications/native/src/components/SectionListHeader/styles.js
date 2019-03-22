import { StyleSheet } from 'react-native';
import {
    COLOR_BRAND_LIGHT_GRAY,
    COLOR_BRAND_BLACK,
    FONT_DEFAULT_SIZE
} from '../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_BRAND_LIGHT_GRAY,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20
    },
    titleText: {
        color: COLOR_BRAND_BLACK,
        fontWeight: 'bold',
        fontSize: FONT_DEFAULT_SIZE
    }
});
