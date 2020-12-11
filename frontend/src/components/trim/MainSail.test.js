import MainSail from './MainSail';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('component test :: MainSail', () => {
  const renderPage = () => {
    render(
      <Router>
        <MainSail />
      </Router>
    );
  };

  xit("renders the MainSail page and it's content", () => {
    // GIVEN
    renderPage();

    // WHEN
    const mainSailHeader = screen.getByRole('heading', /main sail/i);

    // THEN
    expect(mainSailHeader).toBeInTheDocument();
  });

  xtest('button "back" redirects to correct page', () => {
    // GIVEN
    renderPage();

    // WHEN
    const backButton = screen.getByRole('button', /back/i);
    userEvent.click(backButton);

    // THEN
    expect(screen.getByRole('heading', /sail trim/i)).toBeInTheDocument();
  });
});
