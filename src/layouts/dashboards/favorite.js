import React from 'react';
import { Alert, ImageBackground, StyleSheet, View} from 'react-native';
import {Card, Layout, List, Text,TopNavigation } from '@ui-kitten/components';
import titleImage  from './assets/title-image.jpg';

const data = new Array(8).fill({
    title: 'Item',
  });

export function FavoriteLayout( { navigation } ){

    const onItemPress = () => {
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
      };

    const renderItemHeader = () => (

        <ImageBackground
          style={styles.itemHeader}
          source={titleImage}
          resizeMode='stretch'
        />
      );

    const renderItem = (info) => (
        <View style={styles.boxShadow}>
            <Card
            style={styles.item}
            header={()=>renderItemHeader(info)}
            onPress={onItemPress}>
            <Text category='h6' numberOfLines={1} style={{fontWeight:'500'}}>
                Cho thuê chợ Bến Thành số lượng cực lớn
            </Text>
            <Text
                style={styles.itemContent}
                appearance='hint'
                category='s2'
                >
                273 An Dương Vương, Phường 5, Quận 3
            </Text>
            <Text
                style={styles.subItemContent}
                appearance='hint'
                category='c1'
                status='danger'
                >
                10 triệu / phòng
            </Text>            
            </Card>
        </View>
      );
      return (
        <Layout
          style={styles.container}
          level='2'>     
        <TopNavigation
            alignment='center'
            title='Yêu thích'
            style={{backgroundColor:'transparent'}}
        />      
          <List
            style={styles.list}
            contentContainerStyle={styles.listContent}
            data={data}
            renderItem={renderItem}
          />
        </Layout>
      );      
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    list: {
      flex: 1,
    },
    listContent: {
      paddingHorizontal: 26,
      paddingVertical: 8,
    },
    item: {
      marginVertical: 8,
      borderRadius:20,
    },
    itemHeader: {
      height: 125,
    },
    itemContent: {
      marginVertical: 5,
      fontWeight:'400'
    },
    subItemContent:{
      fontWeight:'400'
    },
    boxShadow:{
        shadowColor : '#000',
        shadowOpacity : 0.10,
        shadowRadius : 3,
        shadowOffset : {width:0,height:2}
    }
  });