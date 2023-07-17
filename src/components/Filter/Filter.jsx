import PropTypes from 'prop-types';
import css from './Filter.module.css'

export const Filter = ({filter, onFilterChange }) => {
	return (
		<>
			<form className={css.filter}>
				<label className={css.name}>
					<span>Find contact by name</span>
					<input
						type="text"
						value={filter}
						onChange={onFilterChange}
						className={css.input}
					/>
				</label>
			</form>
		</>
	)
}

Filter.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,

};