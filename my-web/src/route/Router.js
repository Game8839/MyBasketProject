import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';

function Router() {
  const user = useSelector(({ auth: { user } }) => user);
  console.log(user);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
