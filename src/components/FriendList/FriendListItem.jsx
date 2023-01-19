import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={style.item}>
      <span
        className={clsx(style.status, {
          [style.statusOff]: isOnline === false,
          [style.statusOn]: isOnline === true,
        })}
      ></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
