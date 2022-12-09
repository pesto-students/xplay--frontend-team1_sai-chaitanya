import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('<Input />', () => {
	test('display counter text', () => {
		render(<Input id="test-input-id" />);
		expect(screen.getByLabelText('input'));
	});
});
