import React from 'react';
import styles from './Achievements.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';

const Achievements = ({ ideas }) => {
  const countThemes = () => {
    return ideas.reduce((counts, idea) => {
      const { type } = idea;
      if (counts[type]) {
        counts[type] += 1;
      } else {
        counts[type] = 1;
      }
      return counts;
    }, {});
  };

  const generateAchievements = () => {
    const themeCounts = countThemes();

    return Object.keys(themeCounts).map((type) => ({
      type,
      count: themeCounts[type],
    }));
  };

  const achievements = generateAchievements();

  return (
    <Card className={general.card}>
      <h2 className={general.header}>Achievements</h2>
      {achievements.length > 0
        ? <div className={styles.achievements}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievement}>
              <span>{achievement.count}</span>
              <p>{achievement.type}</p>
            </div>
          ))}
        </div>
        : <h2 className={general.header}>No achievements</h2>}
    </Card>
  );
};

export default Achievements;
