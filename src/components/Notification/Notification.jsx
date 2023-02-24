import propTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};