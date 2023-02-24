import propTypes from 'prop-types';
import styles from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={styles.wrapper}>
    {options.map((option, index) => (
      <button
        className={styles.buttons}
        key={index}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};