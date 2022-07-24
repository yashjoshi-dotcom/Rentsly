import React from 'react';
import "./CSS/style.css"

let anim = require("./anim")


const Signin = () =>
{


  return (
    <div className='tody'>
    <div class="container" id="container">
    <div class="form-container sign-up-container">
        <form action="#">
            <div className='H1'>Create Account</div>
            <div class="social-container">
                <a id ="A" href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a id ="A" href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a id ="A" href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span id="Span">or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </form>
    </div>
    <div class="form-container sign-in-container">
        <form action="#">
            <div className='H1'>Sign in</div>
            <div class="social-container">
                <a id ="A" href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a id ="A" href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a id ="A" href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span id="Span">or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a id ="A" href="#">Forgot your password?</a>
            <button>Sign In</button>
        </form>
    </div>
    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <div className='H1'>Welcome Back!</div>
                <p id="P">To keep connected with us please login with your personal info</p>
                <button class="ghost" id="signIn">Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
                <div className='H1'>Hello, Friend!</div>
                <p id="P">Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">Sign Up</button>
            </div>
        </div>
    </div>
</div>
          <script src = { anim }></script>
      </div>)
}

export default Signin;