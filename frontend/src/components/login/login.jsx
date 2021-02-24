import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getCookie, signUp} from "../../reducers/auth_reducer";
import {useState,useEffect} from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';
import './../../sass/login.scss';
import {useFormik} from "formik";
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
import main_image from './../../source/images/main.jpg'



const Signup = () => {
    const dispatch = useDispatch();
    const submit = (data) => {
        dispatch(signUp(data))
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
                <Card>
                    <CardTitle> עצה טובה</CardTitle>
                    <CardTitle size={20} mt={0}>כניסה לפורטל</CardTitle>
                    <CardTitle size={25} mt={40} color={'white'}>האידריכל'ם של הפנסיה שלך!</CardTitle>
                </Card>
            </LeftSide>
            <FormMain>
                <SignupForm submit={submit} />
            </FormMain>
        </Flex>
        </Main>)

}

const SignupForm = ({submit : onSubmit}) => {
    const [pass,showPass] = useState(false);
    const togglePass = () => {
        showPass(!pass)
    }
    const initialValues = {password: '',username : ''}
    const {handleChange, handleSubmit, values} = useFormik({initialValues,onSubmit})
    return (
        <SignUpDiv onSubmit={handleSubmit}>
            <Container>
                <Title>כניסה לפורטל</Title>
            </Container>
            <Inputs>
                <Input  placeholder="username" onChange={handleChange} name={'username'} value={values.username}
                        autoComplete={'off'} maxLength={'15'}/>
                <Relative>
                    <Input  placeholder="username" onChange={handleChange} name={'password'} value={values.password}
                            autoComplete={'off'} maxLength={'15'}/>
                    {pass ? <AiFillEye onClick={togglePass}
                                       className={'clicable-eye-icon'}/> :
                        <AiFillEyeInvisible onClick={togglePass} className={'clicable-eye-icon'} />}
                </Relative>
                {/*<Error>{props.error}</Error>*/}
                <Button color={'true'} onClick={handleSubmit}>Login</Button>
            </Inputs>
        </SignUpDiv>
    )
}
export default Signup;
