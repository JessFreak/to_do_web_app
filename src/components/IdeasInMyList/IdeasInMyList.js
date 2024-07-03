import React, { useState } from 'react';
import styles from './IdeasInMyList.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';
import Idea from '../Idea/Idea';

const IdeasInMyList = ({ ideas, onIdeaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ideas.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ideas.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Card className={general.card}>
      <h2 className={general.header}>Ideas in my list</h2>
      {ideas.length > 0 ? (
        <div className={styles.ideasList}>
          <button className={styles.navButton} onClick={handlePrev}>&lt;</button>
          {ideas.length >= 1 && (
            <Idea
              title={ideas[currentIndex].title}
              type={ideas[currentIndex].type}
              onClick={onIdeaClick}
              short={true}
            />
          )}
          {ideas.length >= 2 && (
            <Idea
              title={ideas[(currentIndex + 1) % ideas.length].title}
              type={ideas[(currentIndex + 1) % ideas.length].type}
              onClick={onIdeaClick}
            />
          )}
          {ideas.length >= 3 && (
            <Idea
              title={ideas[(currentIndex + 2) % ideas.length].title}
              type={ideas[(currentIndex + 2) % ideas.length].type}
              onClick={onIdeaClick}
              short={true}
            />
          )}
          <button className={styles.navButton} onClick={handleNext}>&gt;</button>
          <p className={general.header}>
            {currentIndex + 1} / {ideas.length}
          </p>
        </div>
      ) : (
        <h2 className={general.header}>No ideas in list</h2>
      )}
    </Card>
  );
};

export default IdeasInMyList;
