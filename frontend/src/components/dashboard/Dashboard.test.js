import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { MemoryRouter as Router } from 'react-router-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('component test :: Dashboard', () => {
  const renderPage = () => {
    render(
      <Router>
        <Dashboard />
      </Router>
    );
  };

  test('button "Sail Trim" redirects to correct page', () => {
    // GIVEN
    renderPage();

    // WHEN
    const trimInputButton = screen.getByRole('button', { name: /sail trim/i });
    userEvent.click(trimInputButton);

    // THEN
    expect(screen.getByRole('heading', /sail trim/i)).toBeInTheDocument();
  });
});
