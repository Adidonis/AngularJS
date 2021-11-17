import { render, screen } from '@testing-library/react';
import BarChartScreen from './BarChartScreen';

test('renders Bar Chart Screen', () => {
  render(<BarChartScreen />);
  const linkElement = screen.getByText('FruitInfo');
  expect(linkElement).toBeInTheDocument();
});
