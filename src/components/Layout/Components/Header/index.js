import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faGlobe,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '../../../Popper/Menu';
import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadBtn } from '../../../icons';
import  Image from '~/components/Image';
import routesConfig from '~/config/routes';


import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'VietNam',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

function Header() {

    const currentUser = true;

    

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Phuong',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link className={cx('logo-link')} to={routesConfig.home}><img src={images.logo} alt="Tiktok"></img></Link>
                </div>
                
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button href={routesConfig.upload} className='UploadBtn'>
                                <UploadBtn />
                                <span>Upload</span> 
                            </Button>
                            
                            <Tippy delay={[0, 30]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 30]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <span className={cx('badge')}>12</span>
                                    <InboxIcon />
                                </button>
                            </Tippy>      
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu  items={userMenu ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="http://localhost:3000/upload"
                                alt="Phuong Duc"
                                fallback = "https://images.unsplash.com/photo-1680252112129-91e7840cba38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            />
                        ) : (
                            <button className={cx('more-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
