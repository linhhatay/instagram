import Explore from '~/pages/Explore';
import Home from '~/pages/Home';
import Messages from '~/pages/Messages';
import Profile from '~/pages/Profile';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.messages, component: Messages },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.profile, component: Profile },
];

export { publicRoutes };
