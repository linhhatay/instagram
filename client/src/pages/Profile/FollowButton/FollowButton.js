import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';
import { editFollower, followUser, unfollowUser } from '~/redux/reducers/userSlice';
import { editFollowing } from '~/redux/reducers/authSlice';

const cx = classNames.bind(styles);

function FollowButton({ user }) {
    const [isFollowed, setIsFollowed] = useState(false);

    const auth = useSelector((state) => state.auth.auth);
    const userProfile = useSelector((state) => state.user.anUser);

    const dispatch = useDispatch();

    const handleFollow = () => {
        let newUser = { ...user, followers: [...user.followers, auth.user] };
        dispatch(editFollower(newUser));
        dispatch(editFollowing({ newUser, addFollowingOfCurrentUser: true }));
        dispatch(followUser({ users: userProfile.users, user, auth }));
        setIsFollowed(true);
    };

    const handleUnFollow = () => {
        let newUser = { ...user, followers: user.followers.filter((item) => item._id !== auth.user._id) };
        dispatch(editFollower(newUser));
        dispatch(editFollowing({ newUser }));
        dispatch(unfollowUser({ users: userProfile.users, user, auth }));
        setIsFollowed(false);
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
