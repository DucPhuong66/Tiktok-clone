import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Image from '../Image/Image';
import AccountPreview from '~/components/AccountPreview';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';


const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )

    }

    return (
       <div>
            <Tippy 
                interactive
                delay={[600, 0]}
                offset={[-10, 0]}
                placement='bottom-start'
                render= {renderPreview}
                >
                    <div className={cx('account-item')}>
                        <Image
                            className={cx('avatar')}
                            src="https://images.unsplash.com/photo-1680252112129-91e7840cba38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                            alt=""
                        />
            
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>Phuong Duc</strong>
                                <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                            </p>
                            <p className={cx('name')}>P Duc</p>
                        </div>
                    </div>
            </Tippy>
       </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
