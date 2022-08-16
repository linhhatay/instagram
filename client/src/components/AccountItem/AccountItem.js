import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfileUser } from '~/redux/reducers/userSlice';
import Image from '../Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const dispatch = useDispatch();
    const handleGetAnUser = () => {
        dispatch(getProfileUser(data.username));
    };

    return (
        <Link to={`/${data.username}`} className={cx('wrapper')} onClick={handleGetAnUser}>
            <Image className={cx('avatar')} src={data.avatar} />
            <div className={cx('info')}>
                <div className={cx('username')}>{data.username}</div>
                <div className={cx('name')}>{data.fullname}</div>
            </div>
        </Link>
    );
}

export default AccountItem;
