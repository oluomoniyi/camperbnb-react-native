import React from 'react';
import { Text, Image, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-material-design';
import CardDescription from './partials/CardDescription'
import CardHeader from './partials/CardHeader'
import CardHighlight from './partials/CardHighlight'
import CardHeaderMini from './partials/CardHeaderMini'

const ItemDetail = ({item}) => {
    const {name, image, price, description, location} = item
     return (
        <TouchableOpacity>
            <Card style={{overflow: 'hidden'}}>
                <Card.Media
                    image ={<Image source={require('../assets/img/camp1.jpg')}/>}
                    overlay
                />
                <Card.Body>
                    <CardHighlight>{location}</CardHighlight>
                    <CardHeader>{name}</CardHeader>
                    <CardHeaderMini>{price}</CardHeaderMini>
                    <CardDescription characterLimit={300}>{description}</CardDescription>
                </Card.Body>
                {/*<Card.Actions position="right">
                    <Button value="ACTION" text="Text"/>
                </Card.Actions>*/}
            </Card>
        </TouchableOpacity>
    )
};

export default ItemDetail;