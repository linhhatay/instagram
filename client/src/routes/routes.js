import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Messages from '~/pages/Messages';
import Profile from '~/pages/Profile';
import Login from '~/pages/Login';

import config from '~/config';
import Register from '~/pages/Register';
import Albums from '~/pages/Profile/Albums';
import Tagged from '~/pages/Profile/Tagged';

const privateRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.messages, component: Messages },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.albums, component: Albums },
    { path: config.routes.tagged, component: Tagged },
];

const publicRoutes = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
];

export { publicRoutes, privateRoutes };
