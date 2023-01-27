import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ filter, handleFilter }) {
  return (
    <div className={css.wrapper}>
      <label htmlFor="Find">Find contacts by name</label>
      <input
        value={filter}
        id="Find"
        type="text"
        name="filter"
        onChange={event => handleFilter(event)}
      />
    </div>
  );
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
