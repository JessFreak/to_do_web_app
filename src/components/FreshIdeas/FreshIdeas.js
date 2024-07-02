import React from 'react';
import styles from './FreshIdeas.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';
import Idea from '../Idea/Idea';

const FreshIdeas = () => {
  const ideas = [
    { title: 'Learn how to fold a paper crane', type: 'Education' },
    { title: 'Make a bucket list', type: 'Busywork' },
    { title: 'Do something you used to do as a kid', type: 'Relaxation' },
    { title: 'Listen to your favorite album', type: 'Music' }
  ];

  return (
    <Card className={general.card}>
      <h2 className={general.header}>Choose fresh ideas to do</h2>
      <div className={styles.ideas}>
        {ideas.map((idea, index) => (
          <Idea title={idea.title} type={idea.type} key={index}/>
        ))}
      </div>
    </Card>
  );
};

export default FreshIdeas;
