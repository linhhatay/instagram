import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './Menu.module.scss';
import Button from '~/components/Button';
import { logout } from '~/redux/auth/authActions';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const dispatch = useDispatch();

    const handler = () => {
        dispatch(logout());
    };

    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={data.action && handler}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
