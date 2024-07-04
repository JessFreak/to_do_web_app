import React from 'react';
import styles from './IdeasInMyList.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';
import Idea from '../Idea/Idea';

const IdeasInMyList = ({ ideas, onIdeaClick, currentIndex, setCurrentIndex, handlePullData, handleStoreData }) => {
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ideas.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === ideas.length - 1 ? 0 : prevIndex + 1;
      return newIndex >= ideas.length ? 0 : newIndex;
    });
  };

  return (
    <Card className={`${general.card} ${styles.card}`}>
      <h2 className={general.header}>Ideas in my list</h2>
      {ideas.length > 0 ? (
        <>
          <div className={styles.ideasList}>
            <button className={styles.navButton} onClick={handlePrev}>&lt;</button>
            {ideas.slice(currentIndex, currentIndex + 3).map((idea, index) => (
              <Idea
                key={`list${index}`}
                title={idea.title}
                type={idea.type}
                onClick={() => onIdeaClick(currentIndex + index)}
                short={index !== 1}
              />
            ))}
            <button className={styles.navButton} onClick={handleNext}>&gt;</button>
          </div>
          <p className={general.header}>
            {currentIndex + 1} / {ideas.length}
          </p>
        </>
      ) : (
        <h2 className={general.header}>No ideas in list</h2>
      )}
      <div className={styles.buttons}>
        <button className={styles.actionButton} onClick={handleStoreData}>
          Store Data
        </button>
        <button className={styles.actionButton} onClick={handlePullData}>
          Pull Data
        </button>
      </div>
    </Card>
  );
};

export default IdeasInMyList;
