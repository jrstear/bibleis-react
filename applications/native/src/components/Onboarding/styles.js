import { StyleSheet } from 'react-native';
import { 
    COLOR_BRAND_RED,
    COLOR_BRAND_WHITE
} from '../../utils/constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR_BRAND_RED,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: COLOR_BRAND_WHITE,
        fontSize: 72,
        fontWeight: 'bold',
        paddingBottom: 48
    }
});
