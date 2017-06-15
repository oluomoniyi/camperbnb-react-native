export const defaultStyles = {
  text: {
    fontFamily: 'Avenir-Light',
  },
  leftMargin: {
    marginLeft: 15
  },
}

export const view = {
  container: {
    flex: 1,
  }
}

export const h1 = {
  text: {
     ...defaultStyles.text,
     ...defaultStyles.leftMargin,
     fontSize: 20,
     paddingBottom: 10,
     paddingTop:10,
  }
}

export const cardStyles = {
    Margin:{
         ...defaultStyles.leftMargin,
    },
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        overflow: 'hidden',
        marginBottom:20,
        paddingBottom: 10
    },
    CardHeaderStyle:{
        fontSize: 24,
        marginBottom:5,
        ...defaultStyles.text,
        marginTop:10,
    },
    CardHeaderMiniStyle:{
        fontSize: 15,
        marginTop: 5,
        marginBottom:5,
        color: '#e74c3c',
        ...defaultStyles.text,
    },
    CardDescriptionStyle:{
        color: '#666666',
        fontSize: 12,
        ...defaultStyles.text,
    },
    CardHighlightText:{
        color: '#fff',
        fontSize: 18,
        width: null,
        height: 50,
        lineHeight: 50,
        marginLeft: 15,
        ...defaultStyles.text,
    },
    CardHighlightContainer:{
        backgroundColor: 'rgba(231, 76, 60, 0.9)',
    }
}