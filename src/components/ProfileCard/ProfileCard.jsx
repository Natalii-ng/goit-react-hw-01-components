import PropTypes from 'prop-types';
import css from './ProfileCard.module.css';

export const ProfileCard = ({ userItems: { username, tag, location, avatar, stats } }) => {
    return <div className={css.profile}>
        <div className={css.description} key={username} >
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
            <ul className={css.stats}>{stats}
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    </div>
};
ProfileCard.propTypes = {username:PropTypes.string, tag:PropTypes.string, location:PropTypes.string, avatar:PropTypes.string, stats:PropTypes.object

}