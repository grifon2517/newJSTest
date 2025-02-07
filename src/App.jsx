// import ReactLogo from './assets/react.svg?react';
// import viteLogo from '/vite.svg';
import styles from './app.module.css';
import { useState, useRef, useEffect } from 'react';

// const setFormData = (formData) => {
// 	console.log(formData);
// };

export const App = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [confirmPasswordError, setConfirmPasswordError] = useState(null);

	const submitButtonRef = useRef(null);

	const onEmailChange = (value) => {
		let newError = null;

		if (!/[a-zA-Z]/.test(value)) {
			newError = 'Неверный адрес почты, должны быть только латинские буквы';
		}

		setEmailError(newError);
	};

	const onPasswordChange = (value) => {
		let newError = null;

		if (value.length < 8) {
			newError = 'Пароль не должен быть короче 8 символов';
		}

		setPasswordError(newError);
	};
	const onConfirmPasswordChange = (value, password) => {
		let newError = null;

		if (value !== password) {
			newError = 'Пароли не совпадают';
		}

		setConfirmPasswordError(newError);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('Отправленные данные:', formData);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });

		if (name === 'email') {
			onEmailChange(value);
		}

		if (name === 'password') {
			onPasswordChange(value);
			onConfirmPasswordChange(formData.confirmPassword, value);
		}
		if (name === 'confirmPassword') {
			onConfirmPasswordChange(value, formData.password);
		}
	};

	useEffect(() => {
		if (
			!emailError &&
			!passwordError &&
			!confirmPasswordError &&
			formData.email &&
			formData.password &&
			formData.confirmPassword
		) {
			submitButtonRef.current?.focus();
		}
	}, [formData, emailError, passwordError, confirmPasswordError]);

	const { email, password, confirmPassword } = formData;

	return (
		<div className={styles.App}>
			<h1 className={styles.header}> Регистрация нового пользователя!</h1>
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
					value={email}
					onChange={handleInputChange}
				></input>
				<label htmlFor="password" className={styles.label}>
					Пароль
				</label>
				<input
					className={styles.inputField}
					name="password"
					type="password"
					value={password}
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
					value={confirmPassword}
					placeholder="Повторите пароль"
					onChange={handleInputChange}
				></input>

				<button
					ref={submitButtonRef}
					className={styles.submitButton}
					type="submit"
					disabled={!!emailError || !!passwordError || confirmPasswordError}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
