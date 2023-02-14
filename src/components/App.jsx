import { UserProfile } from 'components/UserProfile/UserProfile';
import { Statistics } from 'components/Statistics/Statistics';
import user from './data/user.json';
import data from './data/data.json';

export const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </div>
  );
};
