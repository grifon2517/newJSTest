import styles from '../../app.module.css';
import PropTypes from 'prop-types';
import { SubmitButton } from './button';

export const FormComponents = ({
	formData,
	handleInputChange,
	onSubmit,
	emailError,
	passwordError,
	confirmPasswordError,
}) => {
	return (
		<form onSubmit={onSubmit}>
			{emailError && <div className={styles.errorLabel}>{emailError}</div>}
			{passwordError && <div className={styles.errorLabel}>{passwordError}</div>}
			{confirmPasswordError && (
				<div className={styles.errorLabel}>{confirmPasswordError}</div>
			)}
			<label htmlFor="email" className={styles.label}>
				Почта
			</label>
			<input
				className={styles.inputField}
				name="email"
				type="email"
				placeholder="Ваша почта"
				value={formData.email}
				onChange={handleInputChange}
			></input>
			<label htmlFor="password" className={styles.label}>
				Пароль
			</label>
			<input
				className={styles.inputField}
				name="password"
				type="password"
				value={formData.password}
				placeholder="Пароль"
				onChange={handleInputChange}
			></input>
			<label htmlFor="confirmPassword" className={styles.label}>
				Подтверждение пароля
			</label>
			<input
				className={styles.inputField}
				name="confirmPassword"
				type="password"
				value={formData.confirmPassword}
				placeholder="Повторите пароль"
				onChange={handleInputChange}
			></input>
			<SubmitButton
				formData={formData}
				emailError={emailError}
				passwordError={passwordError}
				confirmPasswordError={confirmPasswordError}
			/>
		</form>
	);
};

FormComponents.propTypes = {
	formData: PropTypes.shape({
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
		confirmPassword: PropTypes.string.isRequired,
	}).isRequired,
	handleInputChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	emailError: PropTypes.string,
	passwordError: PropTypes.string,
	confirmPasswordError: PropTypes.string,
};
