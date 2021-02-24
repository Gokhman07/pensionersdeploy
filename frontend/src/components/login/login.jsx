// import '../../styles/signup.css';
import {Field, reduxForm, stopSubmit} from "redux-form";
import {NavLink,Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getCookie, signUp} from "../../reducers/auth_reducer";
import {useRef,useState,useEffect} from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import './../../sass/login.scss'
import {
    BackgroundImage,
    Button,
    Card, CardTitle,
    Container,
    Error, Flex, FormMain,
    Input,
    Inputs,
    LeftSide,
    Link,
    Main, MainTitle,
    Relative,
    SignUpDiv,
    Title
} from "./styles";
import {InputVal} from "../others/inputs/input";
import {Loginval} from "../../validator";
import main_image from './../../source/images/main.jpg'




const Signup = () => {
    const dispatch = useDispatch();
    const submit = (data) => {
        dispatch(signUp(data))
    }
    //DELETE THIS WHEN DEPLOY APP
    useEffect(() => {
        submit({username: "tan48",password: 'rererewr'})
        dispatch(getCookie())
    },[])
    //&&&&&&&&
    const username = useSelector((state) => state.auth.username)
    if (username){
        //you are logined
        return <Redirect to={`${process.env.PUBLIC_URL}/mainpage`} />
    }
    return (
        <Main>
            <MainTitle>קבלת סיסמה</MainTitle>
            <Flex>
            <LeftSide >
                <BackgroundImage src={main_image}/>
                <Card>
                    <CardTitle> עצה טובה</CardTitle>
                    <CardTitle size={20} mt={0}>כניסה לפורטל</CardTitle>
                    <CardTitle size={25} mt={40} color={'white'}>האידריכל'ם של הפנסיה שלך!</CardTitle>
                </Card>
            </LeftSide>
            <FormMain>
                <SingupFormC onSubmit={submit} />
            </FormMain>
        </Flex>
        </Main>)

}

const SignupForm = (props) => {
    const [pass,showPass] = useState(false);
    const togglePass = () => {
        showPass(!pass)
    }
    return (
        <SignUpDiv onSubmit={props.handleSubmit}>
            <Container>
                <Title>כניסה לפורטל</Title>
            </Container>
            <Inputs>
                <Input as={Field} placeholder="username" component={InputVal} name={'username'} autoComplete={'off'}
                validate={Loginval} maxLength={'15'}/>
                <Relative>
                    <Input as={Field} type={pass ? 'text' : 'password'}  placeholder="password"
                           component={InputVal} name={'password'} autoComplete={'off'} maxLength={'15'}
                           validate={Loginval}/>
                    {pass ? <AiFillEye onClick={togglePass}
                                       className={'clicable-eye-icon'}/> :
                        <AiFillEyeInvisible onClick={togglePass} className={'clicable-eye-icon'} />}
                </Relative>
                <Error>{props.error}</Error>
                <Button color={'true'}>Login</Button>
            </Inputs>
        </SignUpDiv>
    )
}
const SingupFormC = reduxForm({
    form : 'sign_up'
})(SignupForm)

export default Signup;
