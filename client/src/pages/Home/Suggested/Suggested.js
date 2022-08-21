import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '~/components/Image';
import { getAllUser } from '~/redux/reducers/userSlice';
import styles from './Suggested.module.scss';

const cx = classNames.bind(styles);

function Suggested() {
    const { auth, user } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('account')}>
                <Image className={cx('avatar')} src={auth.auth.user.avatar} />
                <div className={cx('info')}>
                    <div className={cx('user-name')}>{auth.auth.user.username}</div>
                    <h4 className={cx('name')}>{auth.auth.user.fullname}</h4>
                </div>
                <button className={cx('switch')}>Switch</button>
            </div>
            <div className={cx('suggestions')}>
                <div className={cx('label')}>
                    <h4 className={cx('title')}>Suggestions For You</h4>
                    <button>See All</button>
                </div>
                {user.getAll.data.map((item) => (
                    <div className={cx('item')} key={item._id}>
                        <Image className={cx('avatar')} src={item.avatar} />
                        <div className={cx('info')}>
                            <div className={cx('user-name')}>{item.username}</div>
                            <h4 className={cx('name')}>{item.fullname || 'Suggested for you'} </h4>
                        </div>
                        <button className={cx('switch')}>Follow</button>
                    </div>
                ))}
            </div>
            <footer className={cx('footer')}>
                <nav className={cx('link')}>
                    <ul>
                        <li>About</li>
                        <li>Help</li>
                        <li>Press</li>
                        <li>API</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Locations</li>
                        <li>Language</li>
                    </ul>
                </nav>
                <span>© 2022 INSTAGRAM FROM META</span>
            </footer>
        </div>
    );
}

export default Suggested;
