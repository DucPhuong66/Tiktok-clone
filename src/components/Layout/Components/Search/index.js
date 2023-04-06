import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '../../../AccountItem';
import styles from './Search.module.scss';
import { SearchBtn } from '../../../icons';
import { useDebounce } from '~/hooks'
import * as searchServices from '~/apiServices/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);


    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResults = () => {
        setShowResults(false);
    }



    useEffect(() => {

        if(!debounced.trim()) {
            setSearchResult([]);
            return; 
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced)
            
            setSearchResult(result);

            setLoading(false)
        }
        fetchApi()
    }, [debounced]);

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResults && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />} 

                <button className={cx('search-btn')}>
                    <SearchBtn />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
