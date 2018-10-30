import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import config from '../../config';

class Post extends Component {
    constructor(){
        super();
            this.state = {
                liked: false,
                screenWidth: Dimensions.get("window").width
        };
    }

    likeToggled() {
        this.setState({
            liked: !this.state.liked
        });
    }

    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = 
        this.props.item % 2 == 0
        ? "https://lh3.googleusercontent.com/fPkSdYRqWhPGHH7By2-OO9I8D6EMD05Letyn1nq-QZjGQjCaOAae_pRF9TTc5siENRu81Yu8oCFmRFZ7jzFIdFEc" 
        :"https://lh3.googleusercontent.com/Q_ef5Ty8Py6GIxv23s5kDhU2oEAnhzoBbLhcVSdQ_jalndq2fhDyFR766FQlYHbEyvhEhBaud_ZqyB9HGgUWN5jl8fI"
        const imageUri = imageSelection + 
        "=s" + 
        imageHeight +
         "-c";

         const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" : null;

        return(
                <View style={{ flex: 1, width: 100 + "%"}}>
                <View style={styles.userBar}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image
                    style={styles.userPic}
                     source={{
                         uri:
                         "https://lh3.googleusercontent.com/eOSEqCTy679fbLQZcqyKIq7Cq8ToAcibZWUZTr1BNPpQnyywqHNvW7M25t8fQn-aBeMvHul4Ar1LxAA1X3H1DhDV"
                         }}
                    />
                    <Text style={{marginLeft: 10}}>TIMELESS</Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Text style={{fontSize: 30}}>...</Text>
                </View>
                </View>
                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={()=>{
                    this.likeToggled(); 
                    }}
                    >
                <Image 
                style={{ width: this.state.screenWidth, height: 400 }}
                source={{
                    uri: imageUri
            }}
            />
            </TouchableOpacity>
            <View style={styles.iconBar}>
            <Image 
            style={[styles.icon, {height:45, width:45, tintColor: heartIconColor}
            ]} 
            source={config.images.heartIcon}
            />
            <Image 
            style={[styles.icon, {height:36, width:36}
            ]} 
            source={config.images.bubbleIcon}
            />
            <Image 
            resizeMode="stretch"
            style={[styles.icon, {height:50, width:40}
            ]} 
            source={config.images.arrowIcon}
            />
            </View>
            <View style={styles.iconBar}>
            <Image 
            style={[styles.icon, {height: 30, width: 30}
            ]} 
            source={config.images.heartIcon}
            />
            <Text>135 likes</Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
            width: 100 + "%",
            height: 56,
            marginTop: 20,
            backgroundColor: "rgb(250,250,250)",
            borderBottomColor: "rgb(233,233,233)",
            borderBottomWidth: StyleSheet.hairlineWidth,
            justifyContent: "center",
            alignItems: "center"
        },
        userBar: {
            width: 100 + "%",
            height: config.styleConstants.rowHeight,
            backgroundColor: "rgb(255,255,255)",
            flexDirection: "row",
            paddingHorizontal: 10,
            justifyContent: "space-between"
        },
        userPic:{
            height: 40,
            width: 40,
            borderRadius: 20
        },
        iconBar:{
            height:config.styleConstants.rowHeight,
            width: 100 + "%",
            borderColor: "rgb(233,233,233)",
            borderTopWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: StyleSheet.hairlineWidth,
            flexDirection: "row",
            alignItems: "center"
        },
        icon:{
            marginLeft: 5
        }
})

export default Post;