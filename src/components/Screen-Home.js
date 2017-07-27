import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  ListView,
  TouchableHighlight,
} from 'react-native'
import {FadeInView, TextLimit, Hr,Avatar,Loading} from './common'
import {horizontalCardStyles, h1, h4, Home} from './styles';

import {connect} from 'react-redux'
import {GET_ALL_DATA} from '../config/types'


class HomeScreen extends React.Component {

    // componentWillReceiveProps(nextProps) {
    //     // nextProps are the next set of props that this component
    //     // will be rendered with
    //     // this.props is still the old set of props

    //     this.createDataSource(nextProps);
    // }

    // createDataSource({ campgrounds }) {
    //     const ds = new ListView.DataSource({
    //     rowHasChanged: (r1, r2) => r1 !== r2
    //     });

    //     this.dataSource = ds.cloneWithRows(campgrounds);
    // }

    renderFeatured(){
        const {campgrounds} = this.props

        return campgrounds.map(item =>
            <TouchableOpacity style={horizontalCardStyles.container} 
                onPress={() => this.props.navigation.navigate('Details', {  id: item._id, name: item.name })}
                key={item._id}>
                <Image style={horizontalCardStyles.image}
                source={{uri: item.image.replace(".webp", ".jpg")}} //change webp source to jpg, lazy fix instead of node api fix
                />
                <View style={horizontalCardStyles.CardHighlightContainer}>
                    <Text style={horizontalCardStyles.CardHighlightText}>
                        {item.location.toUpperCase()}
                    </Text>
                    <TextLimit characterLimit={20} style={horizontalCardStyles.CardHeaderStyle}>{item.name}</TextLimit>
                    <Text style={horizontalCardStyles.CardHeaderMiniStyle}>£{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderMoreButton(){
        return (
             <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ShowAll')}
                style={{position: 'absolute', right: 15}}
                >
                <Text style={{fontSize:13,paddingBottom: 10,paddingTop:10,paddingLeft:15}}>See More ></Text>
            </TouchableOpacity>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        const { loading } = this.props
        return (
            <FadeInView style={{width: null, flex:1, backgroundColor: '#fff'}}>
                <ScrollView scrollsToTop={false} showsVerticalScrollIndicator={true}>

                    <Image style={Home.backgroundImage} source={require('../assets/img/camp1.jpg')}>
                        <Image style={Home.logo}
                        source={require('../assets/img/icon.png')}
                        />
                        <Text style={h1.text}>camperbnb</Text>
                        <Text style={h4.text} >your adventure starts here</Text>
                        <Text style={h4.text} >CAMPGROUND ✻ LOCATION ✻ ADVENTURE</Text>
                    </Image>

                    <View>    
                        <Text style={{fontSize:20,paddingBottom: 10,paddingTop:10,paddingLeft:15}}>Featured Campgrounds</Text>
                        {this.renderMoreButton()}
                       
                        <ScrollView scrollsToTop={false} horizontal={true} style={{marginRight:10, height: null}}>
                            {this.renderFeatured()}
                        </ScrollView>
                        
                        <Loading
                            animating={loading}
                            style={styles.loader}
                        />
                    </View>

                </ScrollView>
                <Avatar 
                    imageURI={require('../assets/img/add.png')} 
                    onPress={() => this.props.navigation.navigate('ShowAll')}
                />
            </FadeInView>
        )
        }
    }

const styles ={
    loader: {
        flex: 1,
        alignItems: 'center',     // center horizontally
        justifyContent: 'center', // center vertically
    },
}
const mapStateToProps = (state) => {
    console.log("STATE",state.getAllData.campgrounds)
    return state.getAllData
}

export default connect(mapStateToProps)(HomeScreen);