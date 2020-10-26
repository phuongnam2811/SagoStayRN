import * as React from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet, View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Button, Input, Text, Icon } from '@ui-kitten/components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { PersonIcon, EmailIcon } from '../assets/icons';
import  backgroundImage  from './assets/image-background.jpg';

export function SignUpLayout({ navigation }) {

    const [ email, setEmail ] = React.useState('');
    const [ fullname, setFullname ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [ rePassword, setRepassword ] = React.useState('');
    const [ passwordVisible, setPasswordVisible ] = React.useState(true);


 
    const onSignUpButtonPress = () => {
        
      };

      const onSignInButtonPress = () => {
        navigation && navigation.navigate('SignIn');
      };

    const onPasswordIconPress = () => {
        setPasswordVisible(!passwordVisible);
      };

    const EyeIcon = (props) => (
        <TouchableWithoutFeedback onPress={onPasswordIconPress}>
          <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
      );
    return(
        <KeyboardAwareScrollView
        contentContainerStyle= {{ flexGrow: 1 }}
        bounces= 'false'
        bouncesZoom= 'false'
        alwaysBounceVertical= 'false'
        alwaysBounceHorizontal= 'false'
        enableOnAndroid = {true}>
            <ImageBackground style={{width:'100%',height:'100%',flex:1}} source={backgroundImage} >
                <View style={styles.overlay}>
                    <View style={styles.headerContainer}>
                        <Text category='h1' style={{color:'white'}}>SagoStay</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Input
                            status='control'
                            placeholder='Họ tên'
                            value={fullname}
                            accessoryRight={PersonIcon}
                            onChangeText={setFullname}
                        />   
                        <Input
                            style={styles.emailInput}
                            status='control'
                            placeholder='Email'
                            value={email}
                            accessoryRight={EmailIcon}
                            onChangeText={setEmail}
                        />

                        <Input
                            style={styles.passwordInput}
                            status='control'
                            placeholder='Mật khẩu'
                            value={password}
                            accessoryRight={EyeIcon}
                            secureTextEntry={passwordVisible}
                            onChangeText={setPassword}
                        />
                        <Input
                            style={styles.passwordInput}
                            status='control'
                            placeholder='Nhập lại mật khẩu'
                            value={rePassword}
                            accessoryRight={EyeIcon}
                            secureTextEntry={passwordVisible}
                            onChangeText={setRepassword}
                        />                            
                    </View>

                    <Button
                        style={styles.signUpButton}
                        status='control'
                        size='giant'
                        onPress={onSignUpButtonPress}>
                        ĐĂNG KÝ
                    </Button>
                    <Button
                        style={styles.signInButton}
                        appearance='ghost'
                        status='control'
                        onPress={onSignInButtonPress}>
                        Đã có tài khoản ? Đăng nhập
                    </Button>
                </View>
            </ImageBackground>
        </KeyboardAwareScrollView>    
); 

};
const styles = StyleSheet.create({
container: {
    flex : 1,
},
overlay:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)', 
},
headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,       
  },
  formContainer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 16,

  },
  signUpButton: {
    marginHorizontal: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  emailInput:{
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
})


