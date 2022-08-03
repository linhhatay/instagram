import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaTimesCircle } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import axios from 'axios';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounceValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debounceValue,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounceValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <BiSearch />
                    </button>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        type="text"
                        placeholder="Search"
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    {searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FaTimesCircle />
                        </button>
                    )}
                    {loading && <FiLoader className={cx('loading')} />}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
