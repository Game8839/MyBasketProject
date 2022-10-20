import { useSelector, useDispatch } from 'react-redux';
import { setLoginData } from '../../stores/LoginSlice';
import { login } from '../../stores/AuthSlice';

function LoginForm() {
  const loginData = useSelector(({ loginData }) => loginData);

  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    dispatch(setLoginData({ name: e.target.name, value: e.target.value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(loginData));
      console.log(loginData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="container w-50 " onClick={handleSubmitForm}>
      <legend className="mt-5">Login</legend>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email or Mobile number"
          name="emailOrMobile"
          value={loginData.emailOrMobile}
          onChange={handleChangeInput}
        />
        {loginData.emailOrMobile === '' ||
        loginData.emailOrMobile.trim() === '' ? (
          <small class="form-text text-muted">
            Please enter the Email or Mobile Number
          </small>
        ) : (
          ''
        )}
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={loginData.password}
          onChange={handleChangeInput}
        />
      </div>

      <button type="submit" className={`btn btn-primary `}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
