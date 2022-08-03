import classNames from 'classnames/bind';
import { AddIcon, Direct, DirectIcon } from '~/components/Icons';
import styles from './Messages.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import Loading, { LoadingItem } from './Loading';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Messages() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('left')}>
                    <div className={cx('user')}>
                        <span>
                            lih_hatay24
                            <button>
                                <BsChevronDown />
                            </button>
                        </span>
                        <div className={cx('add')}>
                            <AddIcon />
                        </div>
                    </div>
                    <Loading>
                        <LoadingItem />
                        <LoadingItem />
                        <LoadingItem />
                    </Loading>
                </div>
                <div className={cx('right')}>
                    <button className={cx('direct')}>
                        <DirectIcon />
                    </button>
                    <div className={cx('title')}>
                        <h2>Your Messages</h2>
                    </div>
                    <div className={cx('desc')}>Send private photos and messages to a friend or group.</div>
                    <Button primary className={cx('send')}>
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Messages;
