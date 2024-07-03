import styles from './Idea.module.css';

const Idea = ({ title, type, key, onClick, short = false }) => {
  return (
    <div key={key} className={styles.idea} onClick={onClick}>
      <p>{title}</p>
      {!short && <div>
        <hr className={styles.hr}/>
        <span>{type}</span>
      </div>
      }
    </div>
  );
};

export default Idea;