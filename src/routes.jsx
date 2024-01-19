import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import AuthPage from './pages/auth-page/AuthPage';
import AdsPage from './pages/ads-page/AdsPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<AdsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
