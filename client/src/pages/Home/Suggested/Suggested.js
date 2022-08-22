import axios from 'axios';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './Suggested.module.scss';

const cx = classNames.bind(styles);

function Suggested() {
    const { auth } = useSelector((state) => state);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        async function getSuggestedAccount() {
            const res = await axios.get('http://localhost:5000/api/v1/users');
            const data = res.data.filter((item) => item._id !== auth.user._id);
            setSuggestions(data);
        }
        getSuggestedAccount();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('account')}>
                <Image className={cx('avatar')} src={auth.user.avatar} />
                <div className={cx('info')}>
                    <div className={cx('user-name')}>{auth.user.username}</div>
                    <h4 className={cx('name')}>{auth.user.fullname}</h4>
                </div>
                <button className={cx('switch')}>Switch</button>
            </div>
            <div className={cx('suggestions')}>
                <div className={cx('label')}>
                    <h4 className={cx('title')}>Suggestions For You</h4>
                    <button>See All</button>
                </div>
                {suggestions.map((item) => (
                    <Link to={`/${item.username}`} className={cx('item')} key={item._id}>
                        <Image className={cx('avatar')} src={item.avatar} />
                        <div className={cx('info')}>
                            <div className={cx('user-name')}>{item.username}</div>
                            <h4 className={cx('name')}>{item.fullname || 'Suggested for you'} </h4>
                        </div>
                    </Link>
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
