import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders hack the bay', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/hack the bay/i);
    expect(linkElement).toBeInTheDocument();
});