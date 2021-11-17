import { render, screen } from '@testing-library/react';
import PieChartScreen from "./PieChartScreen"

test('renders Pie Chart Screen', () => {
  render(<PieChartScreen/>);
  const linkElement = screen.getByText('Fruit price and name Pie Chart');
  expect(linkElement).toBeInTheDocument();
});
