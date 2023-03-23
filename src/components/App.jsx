import { ProfileCard } from "../components/ProfileCard/ProfileCard.js";
import user from './ProfileCard/user.json';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList.js';
import friends from './FriendList/friends.json';

import { Statistics } from './Statistics/Statistics.js';

import { TransactionHistory } from './TransactionHistory/TransactionHistory.js';
import transactions from './TransactionHistory/transactions.json';


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
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
       <TransactionHistory items={transactions} />
    </div>
  );
};
