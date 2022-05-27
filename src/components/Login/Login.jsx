import "./login.scss";

export default function Login() {
  return (
    <div class="Login">
      <div class="Hero"/>
      <div class="Container">
        <div class="left">
          <div class="loginContainer">
            <h2>Log In</h2>
            <input type="text" class="username" placeholder="Username" id="username"/>
            <input type="text" class="password" placeholder="Password" id="password"/>
            <button type="button" id="loginButton">Log In</button>
            <h4>Or sign up <a href="signup">here</a></h4>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  )
}
