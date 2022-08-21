import classNames from 'classnames/bind';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { HeartIcon } from '~/components/Icons';
import styles from './Comments.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
import { removeComment } from '~/redux/reducers/commentSlice';
import { useEffect } from 'react';
import { getPosts } from '~/redux/reducers/postSlice';

const cx = classNames.bind(styles);

function CommentItem({ data, postId }) {
    const dispatch = useDispatch();
    const { comment } = useSelector((state) => state);

    const handleRemoveComment = () => {
        dispatch(removeComment({ data, postId }));
    };

    useEffect(() => {
        dispatch(getPosts(postId));
    }, [comment.remove.isLoading, comment.create.isLoading]);

    return (
        <div className={cx('comment-item')}>
            <div className={cx('box')}>
                <span className={cx('author')}>{data.author.username}</span>&nbsp;{' '}
                <span className={cx('text')}>{data.content}</span>
            </div>
            <div className={cx('options')}>
                <div>
                    <Tippy
                        trigger="click"
                        interactive
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className={cx('content')} tabIndex="-1" {...attrs}>
                                <div className={cx('menu-options')}>
                                    <div onClick={() => handleRemoveComment()}>Xóa</div>
                                </div>
                            </div>
                        )}
                    >
                        <button className={cx('btn-actions')}>
                            <BiDotsHorizontalRounded />
                        </button>
                    </Tippy>
                </div>

                <button className={cx('loves')}>
                    <HeartIcon height={12} width={12} />
                </button>
            </div>
        </div>
    );
}

export default CommentItem;
