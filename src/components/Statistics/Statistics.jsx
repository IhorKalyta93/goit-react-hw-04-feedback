import propTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={styles.list}>
    <li>Good:{good}</li>
    <li>Neutral:{neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total:{total}</li>
    <li>Positive feedback:{positivePercentage}%</li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number,
  fpositivePercentage: propTypes.number,
};