import styles from './app.module.css';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
import { useRef, useEffect, useState } from 'react';
import { formsScheme } from './components/validationscheme';
import { useAuthForm } from './components/regForm';

export const App = () => {
	const [wasValid, setWasValid] = useState(false);

	const { register, handleSubmit, errors, isValid } = useAuthForm(formsScheme);

	const submitButtonRef = useRef(null);

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	useEffect(() => {
		if (isValid && !wasValid && submitButtonRef.current) {
			submitButtonRef.current.focus();
		}
		setWasValid(isValid);
	}, [isValid, wasValid]);

	return (
		<div className={styles.App}>
			<form onSubmit={handleSubmit(onSubmit)}>
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
					{...register('email')}
				></input>
				<label htmlFor="password" className={styles.label}>
					Пароль
				</label>
				<input
					className={styles.inputField}
					name="password"
					type="password"
					placeholder="Пароль"
					{...register('password')}
				></input>
				<label htmlFor="email" className={styles.label}>
					Подтверждение пароля
				</label>
				<input
					className={styles.inputField}
					name="confirmPassword"
					type="password"
					placeholder="Повторите пароль"
					{...register('confirmPassword')}
				></input>
				<button
					ref={submitButtonRef}
					className={styles.submitButton}
					type="submit"
					disabled={!isValid}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
