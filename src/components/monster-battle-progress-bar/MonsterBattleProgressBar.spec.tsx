import { queryByAttribute, render, waitFor } from '@testing-library/react';
import { MonsterBattleProgressBar } from './MonsterBattleProgressBar';

jest.useFakeTimers(); // Enable fake timers

describe('MonsterBattleProgressBar', () => {
  const mockProgress = {
    title: 'HP',
    percent: 90,
  };

  it('renders the progress bar with the title and percent correctly', async () => {
    const getByAriaValueNow = queryByAttribute.bind(null, 'aria-valuenow');

    const { getByText, container } = render(
      <MonsterBattleProgressBar
        title={mockProgress.title}
        percent={mockProgress.percent}
      />,
    );

    await waitFor(() => {
      jest.advanceTimersByTime(400);
    });
    const titleLabel = getByText('HP');
    expect(titleLabel).toBeInTheDocument();

    const element = getByAriaValueNow(container, '90');
    expect(element).toBeInTheDocument();
  });
});
