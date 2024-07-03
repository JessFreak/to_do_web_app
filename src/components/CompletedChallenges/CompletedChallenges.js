import React from 'react';
import styles from './CompletedChallenges.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';
import { formatDistanceToNow } from 'date-fns';

const CompletedChallenges = ({ ideas }) => {
  const formatWhen = (date) => {
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <Card className={general.card}>
      <h2 className={general.header}>Completed challenges</h2>
      <table className={styles.completedChallenges}>
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Type</th>
          <th>When</th>
        </tr>
        </thead>
        <tbody>
        {ideas.map((challenge, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{challenge.title}</td>
            <td>{challenge.type}</td>
            <td>{formatWhen(challenge.when)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </Card>
  );
};

export default CompletedChallenges;
