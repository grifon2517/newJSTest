import styles from './button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ children, onClick }) => {
	return (
		<button className={styles.Button} onClick={onClick}>
			{children}
		</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node,
};
