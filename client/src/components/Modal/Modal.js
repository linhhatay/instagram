import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Image from '~/components/Image';
import styles from './Modal.module.scss';

import { BsChevronDown } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { FiSmile } from 'react-icons/fi';
import { SelectIcon } from '~/components/Icons';
import { FaTimes } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Explore({ setIsModal }) {
    return (
        <div className={cx('wrapper')} onClick={() => setIsModal(false)}>
            <button className={cx('close')} onClick={() => setIsModal(false)}>
                <FaTimes />
            </button>
            <div className={cx('container')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>Create new post</h1>
                    <button className={cx('shared')}>Share</button>
                </div>
                <div className={cx('content')}>
                    <div className={cx('select')}>
                        <button>
                            <SelectIcon />
                        </button>
                        <h2>Drag photos and videos here</h2>
                        <Button primary className={cx('choose')}>
                            <input type="file" />
                            Select from computer
                        </Button>
                    </div>
                    <div className={cx('post')}>
                        <div className={cx('user')}>
                            <Image className={cx('avatar')} src="111" />
                            <span>lih_hatay24</span>
                        </div>
                        <div className={cx('text')}>
                            <textarea placeholder="Write a caption..."></textarea>
                            <div className={cx('icons')}>
                                <FiSmile />
                            </div>
                        </div>
                        <div className={cx('options')}>
                            <div className={cx('location')}>
                                <input type="text" placeholder="Add location" />
                                <button className={cx('icon-location')}>
                                    <GoLocation />
                                </button>
                            </div>
                            <Button className={cx('btn')} text rightIcon={<BsChevronDown />}>
                                Accessibility
                            </Button>
                            <Button className={cx('btn')} text rightIcon={<BsChevronDown />}>
                                Advanced settings
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
