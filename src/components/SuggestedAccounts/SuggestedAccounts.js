import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import PropTypes from 'prop-types';

import AccountItem from "./AccountItem";

const cx = classNames.bind(styles)

function SuggestedAccounts({label}) {
    return ( 
            <div className={cx('wrapper')}>
                <h2 className={cx('label')}>{label}</h2>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <p className={cx('more-btn')}>See all</p>
            </div> 
    );
}

SuggestedAccounts.propTypes = {
   label: PropTypes.string.isRequired, 
}

export default SuggestedAccounts;