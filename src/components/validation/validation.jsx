export const onEmailChange = (value) => {
	if (!/[a-zA-Z]/.test(value)) {
		return 'Неверный адрес почты, должны быть только латинские буквы';
	}
	return null;
};

export const onPasswordChange = (value) => {
	if (value.length < 8) {
		return 'Пароль не должен быть короче 8 символов';
	}

	return null;
};
export const onConfirmPasswordChange = (value, password) => {
	if (!value || !password) return null;
	if (value !== password) {
		return 'Пароли не совпадают';
	}
	return null;
};
