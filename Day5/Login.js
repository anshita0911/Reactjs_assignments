import { useState } from "react"
 
function Login()
{
    const [uid,setUid]=useState("");
    const [pwd,setPwd]=useState("");
    const [result,setResult]=useState("");
 
    function buttonClick()
    {
        if(uid=="admin" && pwd=="admin123")
        {
            setResult("Welcome to Admin");
        }
        else
        {
            setResult("Invalid");
        }
    }
    return(
        <>
        <h3>Login JS</h3>
        <hr/>
        <fieldset>
        <legend>User Login</legend>
        User Name: <input type="text" value={uid} onChange={ (e) => setUid(e.target.value) }  />    
        <br></br>
        Password : <input type="password" value={pwd} onChange={ (e) => setPwd(e.target.value) }  />    
        <br></br>
        <input type="button" onClick={buttonClick} value="Login"></input>
        <h1>{result}</h1>
        </fieldset>
       
        </>
    )
}
 
export default Login;