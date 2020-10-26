import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Layout, List, Text,Divider,TopNavigation } from '@ui-kitten/components';

const data = new Array(2).fill({
    title: 'Thông báo chung',
    subTitle: 'Chưa có thông báo',
  },{
    title: 'Thông báo bài đăng',
    subTitle: 'Chưa có thông báo',
  });

export function NotificationsLayout(){
    
    const renderNotification = ({item, index}) => (
        <Layout
          style={styles.header}
          level='1'>
          <Avatar
            style={styles.icon}
            size='medium'
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0c_K9LBF8wu6SIf-3WKFVRVG6bLEgM9c1DA&usqp=CAU'}}
          />
          <View style={styles.detailNotification}>
            <Text category='h6' style={{fontWeight:'600'}}>
              {item.title}
            </Text>
            <Text
              appearance='hint'
              category='label' style={{fontWeight:'400'}}>
              {item.subTitle}
            </Text>
          </View>
        </Layout>       
      );      
    return(
        <Layout style={{flex:1}}>
            <TopNavigation
            alignment='center'
            title='Thông báo'
            style={{backgroundColor:'#edf0f5'}}
            />  
            <List
            style={styles.list}
            contentContainerStyle={styles.listContent}
            data={data}
            renderItem={renderNotification}
            ItemSeparatorComponent={Divider}
        />
      </Layout>
    );
}
const styles = StyleSheet.create({
    list: {
      flex: 1,
    },
    listContent: {
        paddingHorizontal: 8,
        paddingBottom: 8,
      },    
    header: {
        flexDirection: 'row',
        padding : 20,
    },
    icon: {
      marginHorizontal: 20,
    },
    detailNotification: {
      flex: 1,
      marginHorizontal: 8,
    },
  });