import PropTypes from 'prop-types';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div
      style={{
        textAlign: 'center',
        width: '350px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '20px 0',
      }}
    >
      <div>
        <img
          src={avatar}
          alt="User avatar"
          width="180"
          style={{
            marginBottom: '20px',
          }}
        />
        <p
          style={{
            fontSize: '26px',
            marginBottom: '10px',
          }}
        >
          {username}
        </p>
        <p
          style={{
            marginBottom: '10px',
          }}
        >
          @{tag}
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '10px',
          }}
        >
          {location}
        </p>
      </div>

      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          listStyle: 'none',
          padding: '0',
          // marginLeft: 'auto',
          // marginRight: 'auto',
        }}
      >
        <li
          style={{
            width: '70px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span
            style={{
              display: 'block',
            }}
          >
            Followers
          </span>
          <span
            style={{
              display: 'block',
            }}
          >
            {followers}
          </span>
        </li>
        <li>
          <span
            style={{
              display: 'block',
            }}
          >
            Views
          </span>
          <span
            style={{
              display: 'block',
            }}
          >
            {views}
          </span>
        </li>
        <li>
          <span
            style={{
              display: 'block',
            }}
          >
            Likes
          </span>
          <span
            style={{
              display: 'block',
            }}
          >
            {likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
