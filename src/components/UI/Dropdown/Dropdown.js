import { Component } from 'react';
import styles from './Dropdown.module.css';

class Dropdown extends Component {
	render() {
		const { value, onChange, options } = this.props;

		return (
			<div className={styles.dropdown}>
				<label htmlFor='dropdown'>Choose the option:</label>
				<select id='dropdown' value={value} onChange={onChange}>
					{Object.values(options).map((option, index) => (
						<option key={index} value={options[option]}>
							{option}
						</option>
					))}
				</select>
			</div>
		);
	}
}

export default Dropdown;
