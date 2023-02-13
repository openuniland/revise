import { HomePage } from 'app/pages/HomePage';
import { LoginPage } from 'app/pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import { withAppHeader } from '../hocs';

const Pages = {
  Home: withAppHeader(HomePage),
  Login: LoginPage,
};

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="/login" element={<Pages.Login />} />
    </Routes>
  );
};

export default Layout;
