import { AsyncStorage } from 'react-native';

export const loadSetting = async (name, defaultValue, dispatch, action) => {
    try {
        let setting = await AsyncStorage.getItem(name);

        // If the setting returns null, use the default value
        if (setting == null) {
            setting = defaultValue;
        }

        dispatch({
            type: action,
            payload: setting 
        });
    } catch (e) {
        // TODO
    }
};

export const saveSetting = async (name, value) => {
    try {
        await AsyncStorage.setItem(name, value);
    } catch (e) {
        // TODO
    }
};

export const getVersionFilesetId = (version, type) => {
    // If there is a fileset available, return it
    const match = version.filesets['dbp-prod'].find((fileset) => {
        return fileset.type === type;
    });

    // If the match is undefined, there is no fileset available
    if (match !== undefined) {
        return match.id;
    }

    return null;
};
