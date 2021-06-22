import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('Shoud be able to render Main component', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Shoud be able to render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
