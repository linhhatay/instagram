import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { refreshToken } from './redux/reducers/authSlice';
import DefaultLayout from '~/layouts';
import config from './config';
import Albums from './pages/Profile/Albums';
import Tagged from './pages/Profile/Tagged';

import io from 'socket.io-client';
import { getSocket } from './redux/reducers/socketSlice';

function App() {
    const dispatch = useDispatch();

    const auth = useSelector((state) => state.auth.auth);

    useEffect(() => {
        // const firstLogin = localStorage.getItem('firstLogin');
        // if (firstLogin) {
        //     dispatch(refreshToken());
        // }
        const socket = io();
        dispatch(getSocket(socket));
        return () => socket.close();
    }, [dispatch]);

    const routes = auth.token ? privateRoutes : publicRoutes;

    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            >
                                <Route path={config.routes.albums} element={<Albums />} />
                                <Route path={config.routes.tagged} element={<Tagged />} />
                            </Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
