import propTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
};