import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';
import { follow, unfollow } from '~/redux/profile/profileActions';

const cx = classNames.bind(styles);

function FollowButton({ user }) {
    const [isFollowed, setIsFollowed] = useState(false);

    const { auth, profile, socket } = useSelector((state) => state);

    const dispatch = useDispatch();

    const handleFollow = async () => {
        setIsFollowed(true);
        await dispatch(follow({ users: profile.users, user, auth, socket }));
    };

    const handleUnFollow = async () => {
        setIsFollowed(false);
        await dispatch(unfollow({ users: profile.users, user, auth, socket }));
    };

    useEffect(() => {
        if (auth.user.following.find((item) => item._id === user._id)) {
            setIsFollowed(true);
        } else {
            setIsFollowed(false);
        }
    }, [auth.user.following, user._id]);

    return (
        <>
            {isFollowed ? (
                <Button primary className={cx('btn-follow')} onClick={handleUnFollow}>
                    UnFollow
                </Button>
            ) : (
                <Button primary className={cx('btn-follow')} onClick={handleFollow}>
                    Follow
                </Button>
            )}
        </>
    );
}

export default FollowButton;
