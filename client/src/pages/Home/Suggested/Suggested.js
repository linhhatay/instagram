import classNames from 'classnames/bind';
import { useEffect } from 'react';
import AccountItem from '~/components/AccountItem';
import Image from '~/components/Image';
import styles from './Suggested.module.scss';

const cx = classNames.bind(styles);

function Suggested() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('account')}>
                <Image className={cx('avatar')} src="https://znews-stc.zdn.vn/static/topic/person/messi.jpg" />
                <div className={cx('info')}>
                    <div className={cx('user-name')}>lih_hatay24</div>
                    <h4 className={cx('name')}>Linh Nguyễn</h4>
                </div>
                <button className={cx('switch')}>Switch</button>
            </div>
            <div className={cx('suggestions')}>
                <div className={cx('label')}>
                    <h4 className={cx('title')}>Suggestions For You</h4>
                    <button>See All</button>
                </div>
                <div className={cx('item')}>
                    <Image className={cx('avatar')} src="https://znews-stc.zdn.vn/static/topic/person/messi.jpg" />
                    <div className={cx('info')}>
                        <div className={cx('user-name')}>lih_hatay24</div>
                        <h4 className={cx('name')}>Linh Nguyễn</h4>
                    </div>
                    <button className={cx('switch')}>Follow</button>
                </div>
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
