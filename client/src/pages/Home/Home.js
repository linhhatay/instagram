import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Home.module.scss';
import Post from './Post';
import Story, { StoryItem } from './Story';
import Suggested from './Suggested';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Story>
                    <StoryItem />
                    <StoryItem />
                    <StoryItem />
                    <StoryItem />
                    <StoryItem />
                </Story>
                <div className={cx('posts')}>
                    <Post />
                </div>
            </div>
            <Suggested />
        </div>
    );
}

export default Home;
