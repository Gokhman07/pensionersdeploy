import {EInput, Error} from "./styles";

export const InputVal = function({input,meta,...props}){
    let throw_error = !meta.active && meta.error && meta.touched
    //
    // console.log(meta.error)
    return(
        <>
            <EInput {...input} {...props} error={throw_error} />
            {throw_error  && <Error>{meta.error}</Error>}
        </>
    )
}