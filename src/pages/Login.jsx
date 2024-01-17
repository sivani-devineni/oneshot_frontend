import React,{useState,useEffect} from 'react'
import { useNavigate,Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from '../Actions/userActions'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {error,loginSuccess} = useSelector(state => state.user)
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeUserHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmitLoginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    setUser({
      email: "",
      password: "",
    })
  };

  useEffect(() => {
    dispatch({type:"loginClearErrors"})
    if(loginSuccess){

      navigate('/');
    }
  },[loginSuccess])


  return (
    <section className="register">
      <div className="container signup">
        <h2> Sign In</h2>
        <form className="form login_form">
          {error &&
                    <p className="form_error-message">
                    {error}
                  </p>
          }
          
          <input type='text' placeholder='E-mail' name='email' value={user.email} onChange={onChangeUserHandler} autoFocus/>
          <input type='password' placeholder='password' name='password' value={user.password} onChange={onChangeUserHandler} />
          <button type="submit" className='btn primary' onClick={onSubmitLoginHandler}>Login</button>
        </form>
        <small>Don't have an account? <Link to='/register'>sign up</Link> </small>
      </div>
    </section>
  )
}

export default Login