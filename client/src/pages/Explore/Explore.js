import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Explore.module.scss';

const cx = classNames.bind(styles);

function Explore() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/132322938_769432543927192_8102092195321802757_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sByt_TIYmC4AX_wT1B9&_nc_ht=scontent.fhan14-1.fna&oh=00_AT9cnw-Bcj3PpR-5VZbXvxz2l2WhskyEsPc_0GCii6bL0Q&oe=6310A46C"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/134423427_773862413484205_5332995157019895749_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p5EPM47vQlYAX8I4xs8&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-CKA8BvLZeeoAL_yDD9GS8H6lCJZCDEToBkeP7GK3c5Q&oe=630FDAE9"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/132259931_768828923987554_1671976318404342479_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ALra3mLqDwQAX_Xz-7H&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_xM1uSjsLtJLiaWJw0-xWBjl9HOoL9zxEA_qnr1WYySw&oe=6310B6DC"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/131047138_767028770834236_8258848434848898322_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=spR4dWNOMFYAX8W80Cw&tn=jj1xeT4T1TwsEydd&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_7o9aknUgmt1j5P6vDB5D693vRCNKYpkfnAPKCqzjPDQ&oe=630F0C48"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/119099031_694043664799414_5062141635160923654_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=gA1dwz7gr5kAX-qR8Xv&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_688srDVv0vXmQrAMmD5IdAzH6AWGIS2ilxWWfjiFa1A&oe=63104A07"
                        />
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/132322938_769432543927192_8102092195321802757_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sByt_TIYmC4AX_wT1B9&_nc_ht=scontent.fhan14-1.fna&oh=00_AT9cnw-Bcj3PpR-5VZbXvxz2l2WhskyEsPc_0GCii6bL0Q&oe=6310A46C"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/134423427_773862413484205_5332995157019895749_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p5EPM47vQlYAX8I4xs8&_nc_ht=scontent.fhan14-2.fna&oh=00_AT-CKA8BvLZeeoAL_yDD9GS8H6lCJZCDEToBkeP7GK3c5Q&oe=630FDAE9"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/132259931_768828923987554_1671976318404342479_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ALra3mLqDwQAX_Xz-7H&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_xM1uSjsLtJLiaWJw0-xWBjl9HOoL9zxEA_qnr1WYySw&oe=6310B6DC"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/131047138_767028770834236_8258848434848898322_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=spR4dWNOMFYAX8W80Cw&tn=jj1xeT4T1TwsEydd&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_7o9aknUgmt1j5P6vDB5D693vRCNKYpkfnAPKCqzjPDQ&oe=630F0C48"
                        />
                    </div>
                    <div className={cx('image')}>
                        <Image
                            className={cx('link')}
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/119099031_694043664799414_5062141635160923654_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=gA1dwz7gr5kAX-qR8Xv&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_688srDVv0vXmQrAMmD5IdAzH6AWGIS2ilxWWfjiFa1A&oe=63104A07"
                        />
                    </div>
                </div>
                <div className={cx('footer')}>
                    <div className={cx('contact')}>
                        <div>Meta</div>
                        <div>About</div>
                        <div>Blog</div>
                        <div>Jobs</div>
                        <div>Help</div>
                        <div>API</div>
                        <div>Privacy</div>
                        <div>Terms</div>
                        <div>Top Account</div>
                        <div>Hashtags</div>
                        <div>Locations</div>
                        <div>Instagram Lite</div>
                        <div>Contact Uploading & Non-Users</div>
                    </div>
                    <div className={cx('contact-sub')}>
                        <div>English</div>
                        <div>© 2022 Instagram from Meta</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
