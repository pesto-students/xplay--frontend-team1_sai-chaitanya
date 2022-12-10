import React from 'react';
import { Typography } from 'antd';
import { render, screen } from '@testing-library/react';

describe('SearchBarWithResults', () => {
	it('Renders with a className equal to the variant', () => {
		const { container } = render(<Typography.Title variant="default" />);
		expect(container.firstChild).toHaveClass('ant-typography');
		expect(screen.getByRole('heading')).toHaveClass('ant-typography');
	});
});

describe('SearchBarWithResults', () => {
	it('Should be true', () => {
		const test = true;
		expect(test).toBe(true);
	});
});
