import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Albums.module.scss';

const cx = classNames.bind(styles);

function Albums() {
    return (
        <div className={cx('content')}>
            <div className={cx('image')}>
                <Image
                    className={cx('link')}
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/275443534_1033184580885319_2682506136463146881_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=G7bdVf6bNPAAX9Utp2x&_nc_oc=AQm3ikaQeScmGEQ6tiErxqEyMZUlgDtMZjdEywc75n2XC0nNp8OWeWLz_-kMlBXFvyA&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8UV8hQ6NXwLfguPaJ3zfUNtH7KXcSG5GhWM4WooXqWtQ&oe=62F5D891"
                />
            </div>
            <div className={cx('image')}>
                <Image
                    className={cx('link')}
                    src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/260895038_972975416906236_8793988061778913950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jP5faAwbB3QAX-gQGr2&_nc_oc=AQlM6CHI-YeQa952YmQYf-jfdVTzHEkNk-fMK2VyGw-7psNASH0eISr31FA6nNnbVLk&_nc_ht=scontent.fhan2-4.fna&oh=00_AT8cC4QxKX9PsEmfdkwi3xq-YVdG4x6yArwFhAySEBN8Ww&oe=62F57C32"
                />
            </div>
            <div className={cx('image')}>
                <Image
                    className={cx('link')}
                    src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-9/134095874_773862403484206_6386062108415883034_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=YROYJ6Jql8wAX_Xe4_Y&_nc_ht=scontent.fhan2-1.fna&oh=00_AT-7ut7G3nXbc50mM8-wgj0WqN1lRGuVsiXr6D0y5_tOiw&oe=63155384"
                />
            </div>
            <div className={cx('image')}>
                <Image
                    className={cx('link')}
                    src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/241712124_924650805072031_7510089811857969789_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=C0wJ_R8bdDAAX9ShVc9&tn=Z5cn-rBvXEZaLYrD&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-v2_ZuPA9MXkZMoFBNruwDe-D5aS_MKAEcVu2UYpxerg&oe=62F66DEC"
                />
            </div>
            <div className={cx('image')}>
                <Image
                    className={cx('link')}
                    src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/123685442_734198690783911_3790775690074049959_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LsbVMKfqZOMAX9JcB2s&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-Cq51rFpCuBpzFk4wO2543in06AVTKdmoD2IfL19IipQ&oe=631707ED"
                />
            </div>
            <div className={cx('image')}>
                <Image
                    className={cx('link')}
                    src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/94995047_603330713870710_4472381030514294784_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Yk6t2iUMhWEAX_uPKDm&_nc_ht=scontent-hkt1-2.xx&oh=00_AT93aIGqgHOZyZJ5gfB97iry6rsaqmHh1XhmGWE834oulA&oe=63177DBD"
                />
            </div>
        </div>
    );
}

export default Albums;
