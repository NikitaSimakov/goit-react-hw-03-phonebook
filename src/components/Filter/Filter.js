import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChange, filter }) => {
  return (
    <label className={css.filter_label}>
      Find contacts by name
      <input
        placeholder="Search"
        className={css.filter_input}
        onChange={onChange}
        value={filter}
        type="text"
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
