import classNames from 'classnames/bind';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FiSmile } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { CommentIcon, HeartIcon, InboxIcon, SaveIcon } from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('info')}>
                    <Image className={cx('avatar')} src="https://znews-stc.zdn.vn/static/topic/person/messi.jpg" />
                    <div className={cx('desc')}>
                        <Link to="" className={cx('user-name')}>
                            leomessi
                        </Link>
                        <div className={cx('location')}>Bloomfield Stadium</div>
                    </div>
                </div>
                <div className={cx('options')}>
                    <BiDotsHorizontalRounded />
                </div>
            </div>
            <div className={cx('content')}>
                <Image className={cx('image')} src="https://znews-stc.zdn.vn/static/topic/person/messi.jpg" />
                <div className={cx('actions')}>
                    <div>
                        <button className={cx('action-btn')}>
                            <HeartIcon />
                        </button>
                        <button className={cx('action-btn')}>
                            <CommentIcon />
                        </button>
                        <button className={cx('action-btn')}>
                            <InboxIcon />
                        </button>
                    </div>
                    <div>
                        <button className={cx('save')}>
                            <SaveIcon />
                        </button>
                    </div>
                </div>
                <div className={cx('post')}>
                    <span className={cx('likes')}>3,029,129 likes</span>
                    <div className={cx('details')}>
                        leomessi&nbsp; Felices porque queríamos arrancar la temporada ganando esta Copa, vamosss!!!{' '}
                    </div>
                    <button className={cx('load-more')}>
                        View All <span>22,413 </span> comments
                    </button>
                    <div className={cx('user-comment')}>
                        mohamedbinkhalifa&nbsp; Good news!
                        <button className={cx('loves')}>
                            <HeartIcon height={12} width={12} />
                        </button>
                    </div>
                    <div className={cx('times')}>8 HOURS AGO</div>
                </div>
                <div className={cx('comment')}>
                    <form>
                        <button className={cx('icons')}>
                            <FiSmile />
                        </button>
                        <textarea placeholder="Add a comment..."></textarea>
                        <button className={cx('send')}>Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Post;
