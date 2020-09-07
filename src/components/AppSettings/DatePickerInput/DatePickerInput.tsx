import React from 'react';

import './DatePickerInput.css';

interface Props {
	value: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function DatePickerInput({ value, onClick }: Props) {
	return (
		<button className="input" onClick={onClick}>
			{value}
		</button>
	);
}
