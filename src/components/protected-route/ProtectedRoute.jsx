import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ redirectPath = '/auth' }) {
    const userData = localStorage.getItem('access__token');
    if (!userData || userData === null) {
        return <Navigate to={redirectPath} replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;
