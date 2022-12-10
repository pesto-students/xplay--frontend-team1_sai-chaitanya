import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import Input from './Input';

describe('check if Input atom is rendering', () => {
	test('Input atom is rendering or not', async () => {
		render(<Input id="test-input-id" placeholder="test input" />);
		await waitFor(() => {
			expect(screen.getByPlaceholderText('test input'));
		});
	});
});
