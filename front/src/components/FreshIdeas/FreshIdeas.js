import React from 'react';
import styles from './FreshIdeas.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';
import Idea from '../Idea/Idea';

const FreshIdeas = ({ ideas, onIdeaClick }) => {
  const handleIdeaClick = (index) => {
    onIdeaClick(index);
  };

  return (
    <Card className={`${general.card} ${styles.card}`}>
      <h2 className={general.header}>Choose fresh ideas to do</h2>
      {Array.isArray(ideas)
        ? <div className={styles.ideas}>
          {ideas.slice(0, 4).map((idea, index) => (
            <Idea
              title={idea.title}
              type={idea.type}
              key={`fresh${index}`}
              onClick={() => handleIdeaClick(index)}
            />
          ))}
        </div>
        : <h2 className={general.header}>Pending...</h2>
      }
    </Card>
  );
};

export default FreshIdeas;
