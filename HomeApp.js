// import React from 'react';
// import { StyleSheet } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';


import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Text, Image } from 'react-native';
// import { LinearGradient } from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
// import AppIntroSlider from 'react-native-app-intro-slider';
import AppIntroSlider from './AppIntroSlider';

const App2=() =>(<Text>Hello Arefin</Text>);
// const ErrorComponent =() =>(<div>{this.props.ignore}</div>);
// import HomeApp from './HomeApp';

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 320,
    }
});

const slides = [
    {
        key: 'somethun',
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('./assets/1.jpeg'),
        imageStyle: styles.image,
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun-dos',
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('./assets/2.jpeg'),
        imageStyle: styles.image,
        backgroundColor: '#febe29',
    },
    {
        key: 'somethun1',
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('./assets/3.jpeg'),
        imageStyle: styles.image,
        backgroundColor: '#22bcb5',
    }
];

export default class HomeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false
        }
    }

    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({showRealApp: true});
    }

    render() {
        if (this.state.showRealApp) {
            return <App2/>;
        } else {
            return (
                <AppIntroSlider slides={slides}
                                onDone={this._onDone}
                />);

        }
    }
}