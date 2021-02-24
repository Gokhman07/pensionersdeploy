import styled,{keyframes} from 'styled-components';
export const SignUpDiv = styled.form`
    width: 350px;
  //564
    padding: 50px 0;
    margin: 0 auto;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 5px;
    box-shadow: 0 0 30px 1px rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
    //background: rgb(64, 74, 201);
`

export const FormMain = styled.div`
  background: rgb(64, 74, 201);
  width: 40%;
  position: relative;
`

export const TitleContainer = styled.div`
  border-left: 4px solid #ff5a00;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Container = styled(TitleContainer)`
    margin-bottom: 20px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 4px solid #ff5a00;
    padding-top: 10px;
    padding-bottom: 10px;
`
export const Title = styled.h2`
    margin: 0;
    color: #ff5a00;
    text-transform: uppercase;
    font-weight: 200;


    font-size: 24px;`
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Button = styled.button.attrs(props => ({
    // disabled : 'true'
}))`
  padding: 10px;
  width: 150px;
  margin-bottom: 30px;
  max-width: 300px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 50px;
  border: none;
  background-color: ${props => props.color ? '#03a9fc' : '#ff5a00;'};
`
export const Link = styled.a`
  color: #e9c156;`

export const Inputs = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px 2px;
  border: none;
  border-bottom: 1px solid #eaeaea;
  width: 100%;`
export const Relative = styled.div`
  position: relative;`

export const Error = styled.span`
  color: red;
  margin-bottom: 20px;    
`
export const LeftSide = styled.div`
  width: 70%;
  height: 100%;
  background: black;
  position: relative;
`
export const Main = styled.div`
  width: 100%;
  height: 100vh;
  //display: flex;
`
export const Card = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 30px;
  position: absolute;
  right: 20%;
  top: 50%;
  transform: translate(0,-50%);
  border: 1px solid black;
  background: rgb(209, 110, 21);
`
export const CardTitle = styled.h2`
  font-size: ${props => props.size ? `${props.size}px` : '50px'};
  color : ${props => props.color ? `${props.color}` : 'rgb(48, 55, 145)'};
  margin: 0;
  margin-top: ${props => props.mt ? `${props.mt}px` : 20};
  text-align: center;
`
export const MainTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color : rgb(48, 55, 145);
  
`
export const Flex = styled.div`
    height: 100%;
  width: 100%;
  display: flex
`;
export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  
`