import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getCookie, signUp} from "../../reducers/auth_reducer";
import {useState,useEffect} from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import './../../sass/login.scss';
import {useFormik} from "formik";
import {
    BackgroundImage, ButtonContainer,

    CardStyle, CardTitle,
    Container,
    Error, Flex, FormMain,

    Inputs,
    LeftSide,
    Link,
    Main, MainTitle,
    Relative,
    SignUpDiv,
    Title
} from "./styles";
import {Input,Button,Card} from 'antd'
import main_image from './../../source/images/main.jpg'
import {loginVal} from "../../validator";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const Signup = () => {
    const dispatch = useDispatch();
    const [error,throwError] = useState('')
    const submit = async (data) => {
        const {payload : response} = await dispatch(signUp(data))
        if (response){
            throwError('Wrong password or username')
        }
    }
    useEffect(() => {
        // submit({username: "tan48",password: 'rererewr'})
        dispatch(getCookie())
    },[])
    const username = useSelector((state) => state.auth.username)
    if (username){
        return <Redirect to={`${process.env.PUBLIC_URL}/mainpage`} />
    }
    return (
        <Main>
            <MainTitle>קבלת סיסמה</MainTitle>
            <Flex>
            <LeftSide >
                <BackgroundImage src={main_image}/>
                <CardStyle>
                    <CardTitle> עצה טובה</CardTitle>
                    <CardTitle size={20} mt={0}>כניסה לפורטל</CardTitle>
                    <CardTitle size={25} mt={40} color={'white'}>האידריכל'ם של הפנסיה שלך!</CardTitle>
                </CardStyle>
            </LeftSide>
            <FormMain>
                <SignupForm submit={submit} error={error}/>
            </FormMain>
        </Flex>
        </Main>)

}

const SignupForm = ({submit : onSubmit,error : error}) => {
    const initialValues = {password: '',username : ''}
    const {handleChange, handleSubmit, values,errors} = useFormik({initialValues,onSubmit,validate : loginVal})
    return (
        <SignUpDiv onSubmit={handleSubmit}>
            <Container>
                <Title>כניסה לפורטל</Title>
            </Container>
            <Inputs>
                <Input  placeholder="username" onChange={handleChange} name={'username'} value={values.username}
                        autoComplete={'off'} maxLength={'15'}/>
                <Relative>
                    <Input.Password   iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                      placeholder="password" onChange={handleChange}
                                      name={'password'} value={values.password}
                            />
                </Relative>
                <Error>{errors.error || error}</Error>
                <ButtonContainer><Button type="primary" onClick={handleSubmit}
                                         style={{width: '100%'}}>Login</Button></ButtonContainer>
            </Inputs>
        </SignUpDiv>
    )
}
export default Signup;
