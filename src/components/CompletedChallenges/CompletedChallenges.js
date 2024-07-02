import React from 'react';
import styles from './CompletedChallenges.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';

const CompletedChallenges = () => {
  const challenges = [
    { title: 'Learn how to fold a paper crane', type: 'Education', when: 'Just now' },
    { title: 'Learn how to fold a paper crane', type: 'Relaxation', when: 'Yesterday' },
    { title: 'Learn how to fold a paper crane', type: 'Sport', when: 'A week ago' }
  ];

  return (
    <Card className={general.card}>
      <h2 className={general.header}>Completed challenges</h2>
      <table className={styles.completedChallenges}>
        <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>When</th>
        </tr>
        </thead>
        <tbody>
        {challenges.map((challenge, index) => (
          <tr key={index}>
            <td>{challenge.title}</td>
            <td>{challenge.type}</td>
            <td>{challenge.when}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </Card>
  );
};

export default CompletedChallenges;
