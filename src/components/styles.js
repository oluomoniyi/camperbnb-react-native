export const defaultStyles = {
  text: {
    fontFamily: 'Avenir-Light',
  },
  leftMargin: {
    marginLeft: 15,
  },
}

export const viewFlex = {
  flex: {
    flex:1,
  }
}

export const Loader = {
    postion:  {
        flex: 1,
        alignItems: 'center',     // center horizontally
        justifyContent: 'center', // center vertically
    }
}

export const Home = {
  logo: {
      width: 100,
      height: 100,
      alignSelf: 'center'
    },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    paddingTop: 2,
  }
}

export const h1 = {
  text: {
     ...defaultStyles.text,
     fontSize: 20,
     paddingTop:10,
     width:null,
     alignSelf: 'center',
     backgroundColor: 'rgba(0,0,0,0)',
     color: '#fff',
     textShadowColor: '#000',
     textShadowOffset: {width: 1, height: 1},
     textShadowRadius: 3,
  }
}

export const h4 = {
  text: {
     ...defaultStyles.text,
     fontSize: 13,
     paddingTop:10,
     alignSelf: 'center',
     backgroundColor: 'rgba(0,0,0,0)',
     color: '#fff',
     textShadowColor: '#000',
     textShadowOffset: {width: 1, height: 1},
     textShadowRadius: 2
  }
}

export const searchStyles = {
  SearchContainer:{
    ...viewFlex.flex,
  },
  SearchSection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  searchIcon: {
    width:30, 
    height:30,
    marginTop:10, 
    marginRight:4,
    marginLeft:5,
    tintColor:'#ccc'
  },
  SearchInput: {
    height: 30, 
    width:null,
    ...viewFlex.flex,
    marginTop:10, 
    marginBottom:10,
    paddingRight:5, 
    color:'#000', 
    fontSize: 20,
    borderWidth:0,
  }, 
  SearchBorder: {
    borderBottomWidth:1, 
    borderBottomColor:'#000000',
    marginleft:15,
    marginRight:15
  }
}



export const cardStyles = {
    Margin:{
         ...defaultStyles.leftMargin,
    },
    container: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        overflow: 'hidden',
        marginBottom:20,
        paddingBottom: 10,
        backgroundColor: '#fff'
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

export const horizontalCardStyles = {
    container: {
        overflow: 'hidden',
        paddingBottom: 10,
         ...defaultStyles.leftMargin,
         width:200,
    },
    image: {
      width: 200,
      height: 200
    },
    CardHighlightText:{
        color: '#000',
        fontSize: 14,
        width: null,
        ...defaultStyles.text,
        marginTop: 10,
    },
    CardHeaderStyle:{
        fontSize: 17,
        marginBottom:5,
        ...defaultStyles.text,
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
    
}