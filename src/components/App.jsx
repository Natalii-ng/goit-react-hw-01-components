import { ProfileCard } from "../components/ProfileCard/ProfileCard.jsx";
import user from './ProfileCard/user.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ProfileCard
        userItems={user}
      />
    </div>
  );
};
