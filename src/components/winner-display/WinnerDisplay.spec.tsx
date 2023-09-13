import { render } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay';

describe('WinnerDisplay', () => {
  it('renders the winner text correctly', () => {
    const { getByText } = render(<WinnerDisplay text="Player 1" />);
    const winnerText = getByText('Player 1 wins!');

    expect(winnerText).toBeInTheDocument();
  });

  it('renders the default text when no winner text is provided', () => {
    const { container } = render(<WinnerDisplay />);
    const defaultText = container.querySelector('.MuiTypography-root.MuiTypography-body1');

    expect(defaultText).toBeInTheDocument();
  });
});
