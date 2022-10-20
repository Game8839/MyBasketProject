import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInitialLoading, setLoginUser } from '../src/stores/AuthSlice';
import './App.css';
import Router from './route/Router';
import { getAccessToken } from '../src/utils/localStorage';
import * as authService from '../src/api/authApi';

function App() {
  const loginData = useSelector(({ loginData }) => loginData);
  const initialLoading = useSelector(
    ({ auth: { initialLoading } }) => initialLoading
  );

  const dispatch = useDispatch();
  console.log(initialLoading);
  useEffect(() => {
    const fetchLoginUser = async () => {
      try {
        console.log('useeffect run');
        if (getAccessToken()) {
          const res = await authService.getMe();
          console.log(res);
          dispatch(setLoginUser(res.data.user));
        }
      } catch (err) {
        console.log(err);
      } finally {
        dispatch(setInitialLoading(false));
      }
    };

    fetchLoginUser();
  }, [dispatch]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
