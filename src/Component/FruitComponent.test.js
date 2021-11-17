import { render, screen } from '@testing-library/react';
import FruitComponent from './FruitComponent';

test('renders Bar Chart Screen', () => {
  render(<FruitComponent />);
  const linkElement = screen.getByText('Fruit List');
  expect(linkElement).toBeInTheDocument();
});
