import { render, waitFor } from '@testing-library/react';

import App from './App';

test('to check if App component is rendering', async () => {
  const { container } = render(<App />);
  await waitFor(() => expect(container.firstChild).toHaveClass('App'));
});
