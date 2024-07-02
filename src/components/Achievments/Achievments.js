import React from 'react';
import styles from './Achievements.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';

const Achievements = () => {
  const achievements = [
    { type: 'Recreational', count: 1 },
    { type: 'Social', count: 3 },
    { type: 'Education', count: 5 },
    { type: 'Sport', count: 3 },
    { type: 'Relaxation', count: 11 }
  ];

  return (
    <Card className={general.card}>
      <h2 className={general.header}>Achievements</h2>
      <div className={styles.achievements}>
        {achievements.map((achievement, index) => (
          <div key={index} className={styles.achievement}>
            <span>{achievement.count}</span>
            <p>{achievement.type}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Achievements;
