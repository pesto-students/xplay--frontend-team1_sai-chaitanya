import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Card from './Card';

describe('Card test cases', () => {
	test('to check if card is rendering', async () => {
		const { container } = render(
			<Card
				coverImage={{
					alt: 'Test Card',
					source: ''
				}}
				id="test-card-id"
				onClick={() => { }}
			/>
		);
		await waitFor(() =>
			expect(container.firstChild).toHaveClass('ant-card')
		);
	});
});
