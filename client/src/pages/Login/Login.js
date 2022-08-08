import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Login.module.scss';

import { AiFillFacebook } from 'react-icons/ai';
import { FiLoader } from 'react-icons/fi';

import Footer from '~/layouts/components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import config from '~/config';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, reset } from '~/redux/reducers/authSlice';
import Loading from '~/components/Loading';
import { hideToast, showToast } from '~/redux/reducers/toastSlice';
import Toast from '~/components/Toast';

const cx = classNames.bind(styles);

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = useSelector((state) => state.auth.login);
    const toast = useSelector((state) => state.toast);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
        };
        dispatch(loginUser(user));
    };

    const handleShowToast = () => {
        dispatch(showToast());
        setTimeout(() => {
            dispatch(hideToast());
        }, 2000);
    };

    const handleResetData = () => {
        dispatch(reset());
    };

    return (
        <div className={cx('wrapper')}>
            {login.isLoading && <Loading />}
            {toast.status && (
                <Toast title={'Thông báo!'} message={'Tính năng chưa được cập nhật, mong bạn vui lòng thử lại sau!'} />
            )}

            <div className={cx('container')}>
                <div className={cx('banner')}>
                    <img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" />
                    {/* <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" /> */}
                </div>
                <div className={cx('content')}>
                    <div className={cx('top')}>
                        <img
                            className={cx('logo')}
                            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                        />
                        <form className={cx('form')} onSubmit={handleLogin}>
                            <div className={cx('form-group')}>
                                <input
                                    type="text"
                                    placeholder="Phone number, username, or email"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className={cx('form-group')}>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={cx('btn')}>
                                {username && password.length >= 6 ? (
                                    <Button type="submit" primary className={cx('login-btn')}>
                                        {login.isLoading ? <FiLoader className={cx('loading')} /> : 'Log in'}
                                    </Button>
                                ) : (
                                    <Button type="submit" disabled className={cx('login-btn')}>
                                        {login.isLoading ? <FiLoader className={cx('loading')} /> : 'Log in'}
                                    </Button>
                                )}
                            </div>
                        </form>
                        <div className={cx('separate')}>
                            <div></div>
                            <span>OR</span>
                            <div></div>
                        </div>
                        <div className={cx('social')} onClick={handleShowToast}>
                            <Button leftIcon={<AiFillFacebook />}>Log in with Facebook</Button>
                        </div>
                        <span className={cx('message-error')}>
                            {login.isError && 'Sorry, your password was incorrect. Please double-check your password.'}
                        </span>

                        <a className={cx('forgot')}>Forgot password?</a>
                    </div>
                    <div className={cx('center')}>
                        <div className={cx('register')}>
                            Don't have an account?{' '}
                            <Link to={config.routes.register} onClick={handleResetData}>
                                Sign up
                            </Link>
                        </div>
                    </div>
                    <div className={cx('bottom')}>
                        <p>Get the app</p>
                        <div className={cx('apps')}>
                            <a>
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" />
                            </a>
                            <a>
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
