import { useState } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import "./App.css";


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = (name) => {
    switch (name) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      
      default: return;
    }
  }

  return (
    <div className="App">
      <h1>Please leave feedback</h1>
      <Section>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {good+neutral+bad === 0 ? (
        <Section>
          <Notification/>
        </Section>
      ) : (
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good+neutral+bad}
            positivePercentage={(Math.round((good * 100) / (good+neutral+bad)))}
          />
        </Section>
      )}
    </div>
  );
}

export default App;