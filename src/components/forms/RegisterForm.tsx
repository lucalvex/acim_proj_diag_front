'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
	const {
		email,
		username,
		cnpj,
		porte,
		setor,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
		fieldErrors
	} = useRegister();

	const config = [
		{
			labelText: 'Endereço de Email',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Nome completo',
			labelId: 'username',
			type: 'text',
			value: username,
			required: true,
		},
		{
			labelText: 'CNPJ',
			labelId: 'cnpj',
			type: 'text',
			value: cnpj,
			required: true,
		},
		{
			labelText: 'Porte da empresa',
			labelId: 'porte',
			type: 'select',
			value: porte,
			required: true,
			options: [
				{ label: 'Profissional liberal', value: 'PL' },
				{ label: 'MEI', value: 'MEI' },
				{ label: 'EPP', value: 'EPP' },
				{ label: 'ME', value: 'ME' },
				{ label: 'Média', value: 'MEDIA' },
				{ label: 'Grande', value: 'GRANDE' }
			],
		},
		{
			labelText: 'Setor da empresa',
			labelId: 'setor',
			type: 'select',
			value: setor,
			required: true,
			options: [
				{ label: 'Setor A', value: 'Setor A' },
				{ label: 'Setor B', value: 'Setor B' },
				{ label: 'Setor C', value: 'Setor C' },
			],
		},
		{
			labelText: 'Senha',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
		{
			labelText: 'Confirme a Senha',
			labelId: 're_password',
			type: 'password',
			value: re_password,
			required: true,
		},
	];
	
	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Criar conta'
			onChange={onChange}
			onSubmit={onSubmit}
			errors={fieldErrors}
		/>
	);
}