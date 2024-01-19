import { Outlet } from 'react-router-dom';

function MainPage() {
    return (
        <div className="wrapper">
            <div className="container">
                <section />
                <Outlet />
            </div>
        </div>
    );
}

export default MainPage;
