import { useRef, useEffect } from 'react';
import styles from '../../app.module.css';
import PropTypes from 'prop-types';
export const SubmitButton = ({ emailError, passwordError, confirmPasswordError, formData }) => {
	const submitButtonRef = useRef(null);

	const passwordsMatch = formData.password === formData.confirmPassword;
	const isValid =
		!emailError &&
		!passwordError &&
		!confirmPasswordError &&
		passwordsMatch &&
		formData.email.trim() &&
		formData.password.trim() &&
		formData.confirmPassword.trim();

	useEffect(() => {
		if (isValid) {
			submitButtonRef.current?.focus();
		}
	}, [isValid]);

	return (
		<button
			ref={submitButtonRef}
			className={styles.submitButton}
			type="submit"
			disabled={!isValid}
		>
			Зарегистрироваться
		</button>
	);
};

SubmitButton.propTypes = {
	formData: PropTypes.shape({
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		confirmPassword: PropTypes.string.isRequired,
	}).isRequired,
	handleInputChange: PropTypes.func,
	emailError: PropTypes.string,
	passwordError: PropTypes.string,
	confirmPasswordError: PropTypes.string,
};
