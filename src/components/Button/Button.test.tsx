import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Testing Button component', () => {
  it('Has proper classes', () => {
    render(
      <Button size="XL" color="Primary">
        Test Button
      </Button>
    );
    expect(screen.getByText('Test Button')).toHaveTextContent('Test Button');
    expect(screen.getByText('Test Button')).toHaveClass(
      'bg-blue-600 hover:bg-blue-700'
    );
  });
});
