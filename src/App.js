import { useState, useEffect } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import "./App.css";


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(Math.round((good * 100) / total));
  }, [total, good]);

  return (
    <div className="App">
      <h1>Please leave feedback</h1>
      <Section>
        <FeedbackOptions
          setGood={setGood}
          good={good}
          setNeutral={setNeutral}
          neutral={neutral}
          setBad={setBad}
          bad={bad}
        />
      </Section>
      {total === 0 ? (
        <Section>
          <Notification/>
        </Section>
      ) : (
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      )}
    </div>
  );
}

export default App;