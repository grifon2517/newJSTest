export const handleInputChange = (
	event,
	setFormData,
	formData,
	setEmailError,
	setPasswordError,
	setConfirmPasswordError,
	onEmailChange,
	onPasswordChange,
	onConfirmPasswordChange,
) => {
	const { name, value } = event.target;

	setFormData((prev) => ({ ...prev, [name]: value }));

	if (name === 'email') {
		setEmailError(onEmailChange(value));
	}

	if (name === 'password') {
		setPasswordError(onPasswordChange(value));
		setConfirmPasswordError(onConfirmPasswordChange(formData.confirmPassword, value));
	}

	if (name === 'confirmPassword') {
		setConfirmPasswordError(onConfirmPasswordChange(value, formData.password));
	}
};
