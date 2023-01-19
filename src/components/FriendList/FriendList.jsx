import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired
  ).isRequired,
};
