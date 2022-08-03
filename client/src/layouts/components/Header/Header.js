import classNames from 'classnames/bind';
import { BiUserCircle } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { ExploreIcon, HeartIcon, HomeIcon, InboxIcon, PostIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <BiUserCircle />,
        title: 'Profile',
        to: '/profile',
    },
    {
        icon: <FiBookmark />,
        title: 'Saved',
    },
    {
        icon: <IoSettingsOutline />,
        title: 'Settings',
        to: '/accounts/edit',
    },
    {
        icon: <MdOutlineChangeCircle />,
        title: 'Switch account',
    },
    {
        title: 'Log Out',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('back')}>
                    <img
                        className={cx('logo')}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                        alt="Instagram"
                    />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    <Button className={cx('btn')} to={config.routes.home} leftIcon={<HomeIcon />}></Button>
                    <Button className={cx('btn')} to={config.routes.messages} leftIcon={<InboxIcon />}></Button>
                    <Button className={cx('btn')} leftIcon={<PostIcon />}></Button>
                    <Button className={cx('btn')} to={config.routes.explore} leftIcon={<ExploreIcon />}></Button>
                    <Button className={cx('btn')} leftIcon={<HeartIcon />}></Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('user')}>
                            <Image className={cx('avatar')} src="1231" />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
