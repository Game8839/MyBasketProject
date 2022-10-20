import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRegisterData, resetRegisterData } from '../../stores/RegisterSlice';
import { register } from '../../stores/AuthSlice';
import { validateRegister } from '../../validations/RegisterValidate';

function RegisterForm() {
  const [isAggree, setIsAggree] = useState(false);
  const registerData = useSelector(({ registerData }) => registerData);
  const user = useSelector(({ auth: { user } }) => user);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    dispatch(setRegisterData({ name: e.target.name, value: e.target.value }));
    console.log(registerData);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error } = validateRegister(registerData);
    if (error) {
      return console.log(error.message);
    }
    try {
      dispatch(register(registerData));
      console.log('register success');
      // dispatch(resetRegisterData());
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="container w-50 " onSubmit={handleSubmitForm}>
      <legend className="mt-5">Register</legend>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          name="firstName"
          value={registerData.firstName}
          onChange={handleChangeInput}
        />
        {registerData.firstName === '' ||
        registerData.firstName.trim() === '' ? (
          <small class="form-text text-muted">firstname is required</small>
        ) : (
          ''
        )}
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          name="lastName"
          value={registerData.lastName}
          onChange={handleChangeInput}
        />
        {registerData.lastName === '' || registerData.lastName.trim() === '' ? (
          <small class="form-text text-muted">lastname is required</small>
        ) : (
          ''
        )}
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Email Address"
          name="email"
          value={registerData.email}
          onChange={handleChangeInput}
        />
        {registerData.email === '' || registerData.email.trim() === '' ? (
          <small class="form-text text-muted">email is required</small>
        ) : (
          ''
        )}
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="mobile"
          name="mobile"
          value={registerData.mobile}
          onChange={handleChangeInput}
        />
        {registerData.mobile === '' || registerData.mobile.trim() === '' ? (
          <small class="form-text text-muted">phonenumber is required</small>
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
          value={registerData.password}
          onChange={handleChangeInput}
        />
        {registerData.password === '' || registerData.password.trim() === '' ? (
          <small class="form-text text-muted">password is required</small>
        ) : (
          ''
        )}
        {registerData.password.trim().length < 6 ? (
          <small class="form-text text-muted">
            <br></br>password must have atleast 6 digits
          </small>
        ) : (
          ''
        )}
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={registerData.confirmPassword}
          onChange={handleChangeInput}
        />
        {registerData.confirmPassword === '' ||
        registerData.confirmPassword.trim() === '' ? (
          <small class="form-text text-muted">
            confirmPassword is required
          </small>
        ) : (
          ''
        )}
        {registerData.confirmPassword !== registerData.password ? (
          <small class="form-text text-muted">
            <br></br>confirmPassword must be similar to password
          </small>
        ) : (
          ''
        )}
        {registerData.confirmPassword.trim().length < 6 ? (
          <small class="form-text text-muted">
            <br></br> confirmPassword must have atleast 6 digits
          </small>
        ) : (
          ''
        )}
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="Aggree with our terms and service"
            value={isAggree}
            onClick={() => {
              setIsAggree((prev) => !prev);
            }}
          />
          <label
            className="form-check-label"
            for="Aggree with our terms and service"
          >
            Aggree with our terms and service
          </label>
        </div>
      </div>
      <button
        type="submit"
        className={`btn btn-primary ${isAggree ? '' : 'disabled'}`}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
