export const defaultStyles = {
  text: {
    fontFamily: 'Avenir-Light',
  },
  leftMargin: {
    marginLeft: 15
  },
}

export const searchStyles = {
  SearchContainer:{
    flex: 1,
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
    flex:1,
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

export const view = {
  container: {
    flex: 1,
  }
}

export const h1 = {
  text: {
     ...defaultStyles.text,
     paddingLeft:15,
     fontSize: 20,
     paddingBottom: 10,
     paddingTop:10,
     backgroundColor:'#fff'
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