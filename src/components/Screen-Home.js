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
import {FadeInView, TextLimit, Hr, Avatar, Loading, WelcomeBanner, ButtonMore, CardFeatured} from './common'
import {horizontalCardStyles, h1, h4, Home, loader} from './styles';

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

    render() {
        const { navigate } = this.props.navigation;
        const { loading } = this.props
        return (
            <FadeInView style={{width: null, flex:1, backgroundColor: '#fff'}}>
                <ScrollView scrollsToTop={false} showsVerticalScrollIndicator={true}>
                
                <WelcomeBanner/>
    
                    <View>    
                        <Text style={{fontSize:20,paddingBottom: 10,paddingTop:10,paddingLeft:15}}>
                            Featured Campgrounds
                        </Text>
                        
                        <ButtonMore navigateTo = {() => this.props.navigation.navigate('ShowAll')}/>
                       
                        <ScrollView scrollsToTop={false} horizontal={true} style={{marginRight:10, height: null}}>
                            {this.renderFeatured()}
                        </ScrollView>
                        
                        <Loading
                            animating={loading}
                            style={loader.position}
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

const mapStateToProps = (state) => {
    return state.getAllData
}

export default connect(mapStateToProps)(HomeScreen);