import { useState } from "react";
import './Login.css';


function Login({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" })


    const handleSubmit = (e) => {
        e.preventDefault();

        Login(details);

    }

    // function Validate(){
    //     return(
    //         email.length > 0 && password.length > 0
    //     )
    // }

    return (
        <div className="container">
            <div className="Login" >
                <br></br>
                <h2> Login </h2>
                <hr></hr>
                {(error !== "") ? (<div className="title"> {error}</div>) : ""}
                <br></br>
                <br></br>
                <form >
                    <input type="Email" placeholder="Enter your email" autoFocus onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    <br/>
                    <br/>
                    <input type="Password" placeholder="Enter your password" autoFocus onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    <br></br>
                    <br></br>
                    <button type="submit" className="button" onClick={(e) => (handleSubmit(e))}> Login </button>
                </form>

            </div>
        </div>

    )
}

export default Login;
