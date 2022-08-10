import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Home.module.scss';
import Post from './Post';
import Story, { StoryItem } from './Story';
import Suggested from './Suggested';
import Loading from '~/components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPosts } from '~/redux/reducers/postSlice';

const cx = classNames.bind(styles);

function Home() {
    const logout = useSelector((state) => state.auth.logout);
    const postsList = useSelector((state) => state.post.posts.data);
    const createPosts = useSelector((state) => state.post.create);

    const dispatch = useDispatch();

    if (createPosts.isLoading) {
        dispatch(getPosts());
    }

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div className={cx('wrapper')}>
            {logout.isLoading && <Loading />}
            {createPosts.isLoading && <Loading />}

            <div className={cx('container')}>
                <Story>
                    <StoryItem />
                </Story>
                <div className={cx('posts')}>
                    {postsList?.map((item) => (
                        <Post key={item._id} content={item.content} image={item.image} location={item.location} />
                    ))}
                </div>
            </div>
            <Suggested />
        </div>
    );
}

export default Home;
