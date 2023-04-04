import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cc16a268af0efb3e9339719270984bc8~c5_100x100.jpeg?x-expires=1680105600&x-signature=%2FBgY5%2BX3C45zrSH0p%2BnEbV7wEQk%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>User Bio</span>
            </div>
        </div>
    );
}

export default AccountItem;
