import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
	test('to check button', () => {
		render(<Button />);
		expect(screen.getByLabelText('input'));
	});

	test('clicking the button toggles an answer on/off', () => {
		render(<Button />);
		const button = screen.getByLabelText('input');
		fireEvent.click(button);
		expect(screen.getByLabelText('input')).toBeInTheDocument();
	});
});
