import React from 'react';
import { 
    createDrawerNavigator, 
    createStackNavigator,
    createSwitchNavigator, 
    createMaterialTopTabNavigator,
    createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import BibleScreen from '../../screens/bible/BibleScreen';
import PassageSelectScreen from '../../screens/bible/PassageSelectScreen';
import VersionsTabScreen from '../../screens/bible/VersionsTabScreen';
import CountriesTabScreen from '../../screens/bible/CountriesTabScreen';
import LanguagesTabScreen from '../../screens/bible/LanguagesTabScreen';
import DonateScreen from '../../screens/DonateScreen';
import DownloadsScreen from '../../screens/DownloadsScreen';
import OnboardingScreen from '../../screens/onboarding/OnboardingScreen';
import DefaultLanguageScreen from '../../screens/onboarding/DefaultLanguageScreen';
import DefaultVersionScreen from '../../screens/onboarding/DefaultVersionScreen';
import JesusFilmScreen from '../../screens/JesusFilmScreen';
import NotebookScreen from '../../screens/NotebookScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const menuIcon = (navigation) => {
    return (
        <Icon name="bars" size={25} onPress={() => navigation.openDrawer()} />
    );
};

const OnboardingStack = createStackNavigator(
    {
        Onboarding: {
            screen: OnboardingScreen
        },
        DefaultLanguage: {
            screen: DefaultLanguageScreen,
            navigationOptions: () => ({
                title: 'Select a Language'
            })
        },
        DefaultVersion: {
            screen: DefaultVersionScreen,
            navigationOptions: () => ({
                title: 'Select a Version'
            })
        }
    },
    {
        headerMode: 'screen'
    }
);

const BibleTabs = createMaterialTopTabNavigator({
    Countries: CountriesTabScreen,
    Languages: LanguagesTabScreen,
    Versions: VersionsTabScreen
});

const BibleStack = createStackNavigator({
    Bible: {
        screen: BibleScreen,
        navigationOptions: ({ navigation }) => ({
            headerLeft: menuIcon(navigation)
        })
    },
    PassageSelect: {
        screen: PassageSelectScreen,
        navigationOptions: () => ({
            title: 'Select a Book'
        })
    },
    VersionSelect: BibleTabs
});

const NotebookStack = createStackNavigator({
    Notebook: {
        screen: NotebookScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Notebook',
            headerLeft: menuIcon(navigation)
        })
    }
});

const DownloadsStack = createStackNavigator({
    Downloads: {
        screen: DownloadsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Downloads',
            headerLeft: menuIcon(navigation)
        })
    }
});

const JesusFilmStack = createStackNavigator({
    JesusFilm: {
        screen: JesusFilmScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Jesus Film',
            headerLeft: menuIcon(navigation)
        })
    }
});

const DonateStack = createStackNavigator({
    Donate: {
        screen: DonateScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Donate',
            headerLeft: menuIcon(navigation)
        })
    }
});

const SettingsStack = createStackNavigator({
    Settings: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            headerLeft: menuIcon(navigation)
        })
    }
});

const AppDrawer = createDrawerNavigator({
    Bible: {
        screen: BibleStack
    },
    Notebook: {
        screen: NotebookStack
    },
    Downloads: {
        screen: DownloadsStack
    },
    JesusFilm: {
        screen: JesusFilmStack
    },
    Donate: {
        screen: DonateStack
    },
    Settings: {
        screen: SettingsStack
    }
});

export default createAppContainer(createSwitchNavigator(
    {
        OnBoarding: OnboardingStack,
        MainApp: AppDrawer
    },
    {
        initialRouteName: 'OnBoarding'
    }
));
