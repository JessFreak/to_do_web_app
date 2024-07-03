import React, { useState, useEffect } from 'react';
import FreshIdeas from './FreshIdeas/FreshIdeas';
import IdeasInMyList from './IdeasInMyList/IdeasInMyList';
import Achievements from './Achievments/Achievments';
import CompletedChallenges from './CompletedChallenges/CompletedChallenges';

const App = () => {
  const [freshIdeas, setFreshIdeas] = useState([]);
  const [ideasInMyList, setIdeasInMyList] = useState([]);
  const [completedIdeas, setCompletedIdeas] = useState([]);

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

    fetchIdeas();
  }, []);

  const handleFreshIdea = (index) => {
    const updatedIdeas = [...freshIdeas];
    const selectedIdea = updatedIdeas.splice(index, 1)[0];
    setFreshIdeas(updatedIdeas);

    setIdeasInMyList([...ideasInMyList, selectedIdea]);
  };

  const handleIdeaClick = (index) => {
    const updatedIdeas = [...ideasInMyList];
    const selectedIdea = updatedIdeas.splice(index, 1)[0];

    selectedIdea.when = new Date();

    setIdeasInMyList(updatedIdeas);
    setCompletedIdeas([...completedIdeas, selectedIdea]);
  };


  return (
    <div>
      <FreshIdeas ideas={freshIdeas} onIdeaClick={handleFreshIdea} />
      <IdeasInMyList ideas={ideasInMyList} onIdeaClick={handleIdeaClick} />
      <Achievements ideas={completedIdeas} />
      <CompletedChallenges ideas={completedIdeas} />
    </div>
  );
};

export default App;
