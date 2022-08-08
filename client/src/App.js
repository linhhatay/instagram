import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import DefaultLayout from '~/layouts';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import config from './config';
import Albums from './pages/Profile/Albums';
import Tagged from './pages/Profile/Tagged';

function App() {
    const user = useSelector((state) => state.auth.login?.currentUser);

    const routes = user ? privateRoutes : publicRoutes;

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
