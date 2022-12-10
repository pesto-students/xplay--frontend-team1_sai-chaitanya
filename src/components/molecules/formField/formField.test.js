import React from 'react';
import { render } from '@testing-library/react';

import FormField from './FormField';

describe('FormField test cases', () => {
	test('to check if formfield is rendering', async () => {
		const { container } = render(
			<FormField
				id="test-card-id"
				name="test field"
			/>
		);
		await waitFor(() =>
			expect(container.firstChild).toBeDefined()
		);
	});
});
