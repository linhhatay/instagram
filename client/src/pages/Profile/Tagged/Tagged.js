import classNames from 'classnames/bind';
import { BiUserPin } from 'react-icons/bi';
import Image from '~/components/Image';
import styles from './Tagged.module.scss';

const cx = classNames.bind(styles);

function Tagged() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                <BiUserPin />
            </div>
            <h1>No Photos</h1>
        </div>
    );
}

export default Tagged;
