import React from 'react';
import { Text } from 'react-native';

const CardDescription = (props) => {
    return (
        <Text style={styles.CardDescriptionStyle}>{props.children}.substr(0,{props.limit})</Text>

        // <% if (campground.name) {  %>
		// 			<%= (campground.name).substr(0,18) %>
		// 			<% if ((campground.name).length > 18) { %>
		// 				<span>...</span>
		// 			<% } %>	
		// 		<% } %>	

        // props.limit
    )
}

const styles = {
    CardDescriptionStyle:{
        color: '#666666',
        fontSize: 12
    }
}

export default CardDescription; 