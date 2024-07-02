import './App.css';
import FreshIdeas from "./FreshIdeas/FreshIdeas";
import IdeasInMyList from "./IdeasInMyList/IdeasInMyList";
import Achievements from "./Achievments/Achievments";
import CompletedChallenges from "./CompletedChallenges/CompletedChallenges";

function App() {
  return (
    <div>
      <FreshIdeas />
      <IdeasInMyList />
      <Achievements />
      <CompletedChallenges />
    </div>
  );
}

export default App;
