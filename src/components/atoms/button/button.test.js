import React from 'react';
import { render, screen } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils/misc/wait';

import Button from './Button';

describe('<Button /> test cases', () => {
	test('to check if button is rendering', async () => {
		render(
			<Button
				id="test-button-id"
				onClick={() => { }}
				title="Test Button"
			/>);
		await wait(() => {
			expect(screen.getByLabelText('Test Button'));
		});
	});
});
