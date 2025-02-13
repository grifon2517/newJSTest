import * as yup from 'yup';

export const formsScheme = yup.object().shape({
	email: yup.string().email('Некорректный адрес почты').required('Обязательное поле'),
	password: yup
		.string()
		.min(8, 'Пароль не должен быть короче 8 символов')
		.required('Обязательное поле'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
		.required('Обязательное поле'),
});
