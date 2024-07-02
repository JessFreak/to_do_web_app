import React, { useState } from 'react';
import styles from './IdeasInMyList.module.css';
import general from '../general.module.css';
import Card from '../UI/Card/Card';
import Idea from '../Idea/Idea';

const IdeasInMyList = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const ideas = [
    { title: 'Make homemade ice cream', type: 'Food' },
    { title: 'Listen to your favorite album', type: 'Music' },
    { title: 'Clean out your car', type: 'Chores' },
    { title: 'Go for a walk', type: 'Exercise' },
    { title: 'Read a book', type: 'Education' }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ideas.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ideas.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Card className={general.card}>
      <h2 className={general.header}>Ideas in my list</h2>
      <div className={styles.ideasList}>
        <button className={styles.navButton} onClick={handlePrev}>&lt;</button>
        <Idea title={ideas[(currentIndex - 1 + ideas.length) % ideas.length].title}
              type={ideas[(currentIndex - 1 + ideas.length) % ideas.length].type} short={true}/>
        <Idea title={ideas[currentIndex].title} type={ideas[currentIndex].type}/>
        <Idea title={ideas[(currentIndex + 1) % ideas.length].title}
              type={ideas[(currentIndex + 1) % ideas.length].type} short={true}/>
        <button className={styles.navButton} onClick={handleNext}>&gt;</button>
      </div>
      <p className={general.header}>{currentIndex + 1} / {ideas.length}</p>
    </Card>
  );
};

export default IdeasInMyList;
