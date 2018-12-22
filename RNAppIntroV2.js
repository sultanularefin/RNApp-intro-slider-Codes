import { StyleSheet, AsyncStorage, Platform, Dimensions, NetInfo, View, ActivityIndicator, Text } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import { StackNavigator, NavigationActions } from 'react-navigation';
import PropTypes from "prop-types";
import ExtraDimensions from 'react-native-extra-dimensions-android';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';
// import AppIntroSlider from 'react-native-app-intro-slider';
import AppIntroSlider from './AppIntroSlider';
// import { Styles } from "../user/Profile";

// const width = Dimensions.get("window").width;
// const height = Platform.OS === "ios"
//   ? Dimensions.get("window").height
//   : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

const App2=() =>(<Text>Hello Arefin</Text>);


// const width = Dimensions.get("window").width;
//
// const height = Platform.OS === "ios"
//   ? Dimensions.get("window").height
//   : ExtraDimensions.get("REAL_WINDOW_HEIGHT");


// console.log("width: ",width);
// console.log("height: ",height);



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
    image: require("./assets/AppTour/jeremybishopunsplash.jpg"),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require("./assets/AppTour/jeremybishopunsplash.jpg"),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require("./assets/AppTour/jeremybishopunsplash.jpg"),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];


function Loading (){
  // return (<Text>Loading...
  //   [Arefin: this bug inherited from maxim, please reload/relaunch
  //   it happens only in the first time.
  // </Text>);


  console.log("At Loading.... of RNAppIntroV2.js");
  return (
    <View style={{flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent:'center'}}
          key={'fwerwerwertqewrtqwe21212rArefin'}>
      <ActivityIndicator
        size="large"
        color="#da6a41"
        // color="#AAF26C"
      />
    </View>
  );
}


export default class RNAppIntroV2 extends React.Component {
  constructor(props) {
    super(props);
    // this.retrieve_NikunzoAppIntro=this.retrieve_NikunzoAppIntro.bind(this);
    // const NikunzoAppIntro = this.props.navigation.state.params
    //   ? JSON.parse(this.props.navigation.state.params.From_Login_Screen)
    //   : null;
    this.state = {
      showRealApp: false,
      // checkStorage: true,
    };
  }


  async fetchNikunzoAppIntro() {
    console.log("fetching user Local...");
    const context = this;
    try {
      // console.log("accessing user...");
      const value = await AsyncStorage.getItem('NikunzoAppIntro');
      console.log("user's value: ", value);
      if (value !== null) {
        console.log("value if (value !==null) in fetchUserLocal(): ", value);
        context.setState(
          { showRealApp: !JSON.parse(value),
            // checkStorage:false,
          }, () => {
            //
          });

        //let value2 = JSON.parse(value);
        //return value2;
      } else {
        // context.props.navigation.navigate('LoginScreen');
        console.log("promise from this.fetchUserLocal(): ", value);


        // TEST PURPOSES --> WHEN value is null.
        context.setState(
          { showRealApp: true,
            // checkStorage:false,
          }, () => {
            //
          });
        //context.fetchUserServer().bind(this);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //const { navigate } = this.props.navigation;
    console.log("At componentDidUpdate: ");
    //console.log("After internet connection resotroed this function invoked.")
    console.log("this.state.showRealApp(False default): ", this.state.showRealApp);
    // Typical usage (don't forget to compare props):
    if (this.state.showRealApp !== prevState.showRealApp) {
      //this.fetchData(this.props.userID);
      console.log("showRealApp && checkStorage changed! ");
      //return navigate('Newsfeed', { From_RNAppIntroV2_Screen: true });
    }



    // NetInfo.removeEventListener(
    // NetInfo.addEventListener(
    //   'connectionChange',
    //   this.handleFirstConnectivityChange
    // );
  }

  // static  getDerivedStateFromProps(props, state){
  //   // if(state.showRealApp===false){
  //
  //     //const params= this.retrieveUserData(this);
  //     // let value =this.retrieve_NikunzoAppIntro(this);
  //
  //     console.log("aaaa____________vvvvvvv_____________cccccc");
  //
  //
  //   // }
  //
  //   let Intro_tru=this.fetchNikunzoAppIntro();
  //
  //   console.log(Intro_tru
  //
  // }

  // arefin TEst.
  // retrieve_NikunzoAppIntro = async () => {
  //   try {
  //     // const value = await AsyncStorage.getItem('user');
  //     const value = await AsyncStorage.getItem(['NikunzoAppIntro'], (err, result) => {
  //       // try {
  //       //   const value = await AsyncStorage.getItem('TASKS');
  //       if(result){
  //         if (value !== null) {
  //           // success.
  //           // We have data!!
  //           console.log("value: (True/false) ", value);
  //           return value;
  //         }
  //       }
  //       if(err){
  //
  //         console.log("error is:",err);
  //       }
  //     });
  //   }
  //   catch (error) {
  //     // Error retrieving data
  //     console.log("Error in retrieveUserData() ")
  //   }
  //   console.log("aaaaaaaaa____________________bbbbbbbbbbbbbbb____________cCccccccccc");
  // }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  render() {
    // const { navigate } = this.props.navigation;
    // const params= this.retrieve_NikunzoAppIntro(this);

    // const { params } = this.props.navigation.state;
    // const From_RNAppIntroV2_Screen = params ? params.From_RNAppIntroV2_Screen : null;


    // if (this.state.showRealApp===false) {
    //   this.fetchNikunzoAppIntro();
    //   return <Loading/>;
    // }

    // let form_login_screen=JSON.parse(this.props.navigation.state.params.From_Login_Screen);
    // console.log("ShowRealApp (!form_login_screen): ",!form_login_screen);
    // console.log("this.state at [RNAppIntroV2.js]: ",this.state);


    if(this.state.showRealApp===false){
      return (<AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        showSkipButton={true}
        showPrevButton={true}
      />);
    }
    // return (navigate('Newsfeed', { From_RNAppIntroV2_Screen: true }));
    //}
    return <App2/>;
  }
}

//
// if (!this.state.showRealApp) {
//   this.fetchNikunzoAppIntro();
//   console.log("this.state:(after fetchUserLocal() fethcuserServer(): ",this.state);
//
// }
// else{
//   return navigate('Newsfeed', { From_RNAppIntroV2_Screen: true });
// }
// }
//}


RNAppIntroV2.propTypes = {
  // ready:PropTypes.bool,
  // noticeReady: PropTypes.bool,
  // pollReady:PropTypes.bool,
  //
  // appTourUser:PropTypes.object,
  navigation:PropTypes.object,
};