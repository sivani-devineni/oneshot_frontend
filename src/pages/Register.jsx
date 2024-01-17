import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Actions/userActions";
const Register = () => {
  const { error, signUpSuccess } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  useEffect(() => {
    dispatch({ type: "signUpClearErrors" });
    if (signUpSuccess) {
      setUser({
        email: "",
        password: "",
      });
      navigate("/login");
    }
  }, [signUpSuccess]);

  const onChangeUserHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitRegisterHandler = () => {
    dispatch(registerUser(user));
  };

  return (
    <section className="register">
      <div className="container signup">
        <h2> Sign Up</h2>
        <form className="form register_form">
          {error && <p className="form_error-message">{error}</p>}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={user.name}
            onChange={onChangeUserHandler}
            autoFocus
          />
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            value={user.email}
            onChange={onChangeUserHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={onChangeUserHandler}
            autoFocus
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="cpassword"
            value={user.cpassword}
            onChange={onChangeUserHandler}
            autoFocus
          />
          <button
            type="button"
            className="btn primary"
            onClick={onSubmitRegisterHandler}
          >
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link to="/login">sign in</Link>{" "}
        </small>
      </div>
    </section>
  );
};

export default Register;
