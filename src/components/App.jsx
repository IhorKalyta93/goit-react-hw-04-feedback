import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    const counter = prevState => prevState + 1;
    switch (event) {
      case 'good':
        setGood(counter);
        break;
      case 'neutral':
        setNeutral(counter);
        break;
      case 'bad':
        setBad(counter);
        break;
    }
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        fontSize: 18,
      }}
    >
      <Section title="Please leave feedback">
        <Feedback
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleIncrement}
        />{' '}
      </Section>
      <Section title="Statistics">
        {countTotalFeedback !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
