import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

import { MdNotifications } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { hideMessage } from '~/redux/reducers/authSlice';
import { hideToast } from '~/redux/reducers/toastSlice';

const cx = classNames.bind(styles);

const Toast = ({ title, message, error = false }) => {
    const dispatch = useDispatch();

    const handleHideToast = () => {
        dispatch(hideMessage());
        dispatch(hideToast());
    };

    const classes = cx('toast', {
        error,
    });
    return (
        <div className={classes}>
            <div className={cx('toast__icon')}>
                <MdNotifications />
            </div>
            <div className={cx('toast__body')}>
                <h3 className={cx('toast__title')}>{title} </h3>
                <p className={cx('toast__msg')}>{message}</p>
            </div>
            <div className={cx('toast__close')} onClick={handleHideToast}>
                <FaTimes />
            </div>
        </div>
    );
};

export default Toast;
