import React from 'react';
import { render } from '@testing-library/react';

import FormItem from "./FormItem";

describe('FormItem test cases', () => {
	test('to check if FormItem is rendering', async () => {
		const { container } = render(
			<FormItem
				id="test-form-item"
				label="Test Form Item"
				name="Test Form Item">
					<input type="text" />
			</FormItem>
		);
		await waitFor(() =>
			expect(container.firstChild).toBeDefined()
		);
	});
});
