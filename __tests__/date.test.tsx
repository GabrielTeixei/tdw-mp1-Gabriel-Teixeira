import { render, screen } from '@testing-library/react';
import DateComponent from '../app/date';

describe('DateComponent', () => {
  it('renders formatted date', () => {
    render(<DateComponent dateString="2025-10-15" />);
    expect(screen.getByText('October 15, 2025')).toBeInTheDocument();
    const time = screen.getByText('October 15, 2025').closest('time');
    expect(time).toHaveAttribute('dateTime', '2025-10-15');
  });
});
