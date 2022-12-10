import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('<Input /> should be rendered', () => {
	test('test if input component renders', () => {
		render(<Input id="test-input-id" />);
		expect(screen.getByLabelText('input'));
	});
});
