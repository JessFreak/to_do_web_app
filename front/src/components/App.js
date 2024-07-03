import React, { useState, useEffect } from 'react';
import FreshIdeas from './FreshIdeas/FreshIdeas';
import IdeasInMyList from './IdeasInMyList/IdeasInMyList';
import Achievements from './Achievments/Achievments';
import CompletedChallenges from './CompletedChallenges/CompletedChallenges';

const App = () => {
  const [ideasInMyList, setIdeasInMyList] = useState(() => {
    const storedIdeas = localStorage.getItem('ideasInMyList');
    return storedIdeas ? JSON.parse(storedIdeas) : [];
  });
  const [completedIdeas, setCompletedIdeas] = useState(() => {
    const storedIdeas = localStorage.getItem('completedIdeas');
    return storedIdeas ? JSON.parse(storedIdeas) : [];
  });
  const [currentIndex, setCurrentIndex] = useState(() => {
    const storedIndex = localStorage.getItem('currentIndex');
    return storedIndex ? parseInt(storedIndex) : 0;
  });

  useEffect(() => {
    localStorage.setItem('ideasInMyList', JSON.stringify(ideasInMyList));
  }, [ideasInMyList]);

  useEffect(() => {
    localStorage.setItem('completedIdeas', JSON.stringify(completedIdeas));
  }, [completedIdeas]);

  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex.toString());
  }, [currentIndex]);

  const [freshIdeas, setFreshIdeas] = useState([]);
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://bored-api.appbrewery.com/filter?'));
        const data = await response.json();
        const parsedData = JSON.parse(data.contents).map(item => ({
          title: item.activity,
          type: item.type,
          key: item.key,
        }));

        setFreshIdeas(parsedData);
      } catch (error) {
        console.error('Error fetching ideas:', error);
      }
    };

    fetchIdeas().then();
  }, []);

  const handleFreshIdea = (index) => {
    const updatedIdeas = [...freshIdeas];
    const selectedIdea = updatedIdeas.splice(index, 1)[0];
    setFreshIdeas(updatedIdeas);

    if (ideasInMyList.length === 1) {
      setCurrentIndex(1);
    }
    setIdeasInMyList([...ideasInMyList, selectedIdea]);
  };

  const handleIdeaClick = (index) => {
    const updatedIdeas = [...ideasInMyList];
    const selectedIdea = updatedIdeas.splice(index, 1)[0];

    selectedIdea.when = new Date();

    setIdeasInMyList(updatedIdeas);
    if (ideasInMyList.length === currentIndex + 1) {
      setCurrentIndex(currentIndex - 1);
    }
    setCompletedIdeas([...completedIdeas, selectedIdea]);
  };

  return (
    <div>
      <FreshIdeas ideas={freshIdeas} onIdeaClick={handleFreshIdea} />
      <IdeasInMyList ideas={ideasInMyList} onIdeaClick={handleIdeaClick} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <Achievements ideas={completedIdeas} />
      <CompletedChallenges ideas={completedIdeas} />
    </div>
  );
};

export default App;