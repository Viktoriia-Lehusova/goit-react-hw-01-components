import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${isOnline ? css.online : css.offline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
