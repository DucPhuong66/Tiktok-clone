import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';



import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '../../../AccountItem';


const cx = classNames.bind(styles);


function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
                setSearchResult([]);
        }, 0)
    }, [])

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                <Tippy 
                     interactive = {true}
                    visible={searchResult.length > 0}
                    render = {(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}> 
                                  Accounts  
                                </h4>
                                <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                            </PopperWrapper>
                        </div>
                    )} >
                        <div className={cx('search')}>
                            <input placeholder='Search accounts and videos' spellCheck={false}/>
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        
                                <button className={cx('search-btn')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                        </div>
                    </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button> 
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
