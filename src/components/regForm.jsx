import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const useAuthForm = (schema) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(schema),
		mode: 'onChange',
	});

	return {
		register,
		handleSubmit,
		errors,
		isValid,
	};
};
