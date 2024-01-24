import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ redirectPath = '/auth' }) {
    const userData = JSON.parse(localStorage.getItem('userDataInfo'));
    console.log(userData);
    if (!userData || userData === null) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;
