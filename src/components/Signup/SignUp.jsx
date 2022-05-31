import "./signup.scss";

export default function Signup() {
  return (
    <div class="signup">
      <div class="form">
        <h2>Sign Up</h2>
        <div class="form-item">
          <input
            type="text"
            class="username"
            placeholder="Username"
            id="username"
            required
          />
        </div>
        <div class="form-item">
          <input
            type="text"
            class="password"
            placeholder="Password"
            id="password"
            required
          />
        </div>
        <div class="form-item">
          <input
            type="text"
            class="confirmUsername"
            placeholder="Confirm Username"
            id="confirmUsername"
            required
          />
        </div>
        <div class="form-item">
          <input
            type="text"
            class="confirmPassword"
            placeholder="Confirm Password"
            id="confirmPassword"
            required
          />
        </div>
        <button type="button" id="loginButton" href="Dashboard">
          Sign up
        </button>
      </div>
    </div>
  );
}
