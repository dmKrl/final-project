import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import AuthPage from './pages/auth-page/AuthPage';
import AdsPage from './pages/ads-page/AdsPage';
import RegistrationPage from './pages/registration-page/RegistrationPage';
import AdvPage from './pages/adv-page/AdvPage';
import MyAdvPage from './pages/my-adv-page/MyAdvPage';
import SellerProfilePage from './pages/seller-profile-page/SellerProfilePage';
import AddNewAdv from './modals/add-new-adv/AddNewAdv';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<AdsPage />} />
                <Route path="/adv-page" element={<AdvPage />} />
                <Route path="/my-adv-page" element={<MyAdvPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/seller-profile" element={<SellerProfilePage />} />
                <Route path="/add-new-adv" element={<AddNewAdv />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
