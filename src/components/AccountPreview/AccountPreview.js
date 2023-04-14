import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.scss';
import Button from '../Button/Button';
import Image from '../Image/Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src="https://images.unsplash.com/photo-1680252112129-91e7840cba38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>Phuong Duc</strong>
                    <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>P Duc</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <label className={cx('label')}>Followers</label>
                    <strong className={cx('value')}>8.2M </strong>
                    <label className={cx('label')}>Likes</label>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
