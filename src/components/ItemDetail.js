import React from 'react';
import { Text, Image, View, WebView} from 'react-native';
import { Card, Button } from 'react-native-material-design';
import CardDescription from './partials/CardDescription'
import CardHeader from './partials/CardHeader'
import CardHeaderMini from './partials/CardHeaderMini'

const ItemDetail = ({item}) => {
    const {name, image, price, description, location} = item
    const {headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles
    return (
            <View>
                <Card>
                    <Card.Media
                        image ={<Image source={require('../assets/img/camp1.jpg')}/>}
                        overlay
                    />
                    <Card.Body>
                        <CardHeader>{name} - {location}</CardHeader>
                        <CardHeaderMini>{price}</CardHeaderMini>
                        <CardDescription limit={50}>{description}</CardDescription>
                    </Card.Body>
                    <Card.Actions position="right">
                        <Button value="ACTION" text="Text"/>
                    </Card.Actions>
                </Card>
            </View>
    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
}

export default ItemDetail;