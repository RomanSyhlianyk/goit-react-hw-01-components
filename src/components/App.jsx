import friends from '../data/friends.json';
import user from '../data/user.json';
import data from '../data/data.json';
import transactions from '../data/transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" data={data} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
};
