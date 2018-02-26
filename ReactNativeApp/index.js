// import libraries to help create components
import React from 'react';
import { View, AppRegistry } from 'react-native';

//Import Components
import Header from './src/components/Header';
import AlbumList from'./src/components/AlbumList';

// create component
const App = () =>{
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList/>
        </View>


    );
};


// Render it to device
AppRegistry.registerComponent('ReactNativeApp', () => App);
