import styles from './app.module.css';
import { useState } from 'react';
import {
	onEmailChange,
	onConfirmPasswordChange,
	onPasswordChange,
} from './components/validation/main';
import { FormComponents } from './components/form/formComponent';
import { handleInputChange } from './components/form/handleInputChange';

export const App = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [confirmPasswordError, setConfirmPasswordError] = useState(null);

	const onSubmit = (event) => {
		event.preventDefault();

		setTimeout(() => {
			console.log('Отправленные данные:', formData);
		}, 0);
	};

	return (
		<div className={styles.App}>
			<h1 className={styles.header}> Регистрация нового пользователя!</h1>
			<FormComponents
				formData={formData}
				handleInputChange={(event) =>
					handleInputChange(
						event,
						setFormData,
						formData,
						setEmailError,
						setPasswordError,
						setConfirmPasswordError,
						onEmailChange,
						onPasswordChange,
						onConfirmPasswordChange,
					)
				}
				onSubmit={onSubmit}
				emailError={emailError}
				passwordError={passwordError}
				confirmPasswordError={confirmPasswordError}
			/>
		</div>
	);
};
