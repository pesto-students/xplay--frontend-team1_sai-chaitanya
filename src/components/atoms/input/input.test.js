import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {
	test('display counter text', () => {
		render(<Input />);
		expect(screen.getByLabelText('input'));
	});
});
