import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Login from './Login';
import React from 'react';

describe('Login Test', () => {
  test('login with correct credentials directs to dashboard', () => {
    // GIVEN
    render(
      <Router>
        <Login
          loginData={{
            username: 'test',
            password: 'test',
          }}
        />
      </Router>
    );

    // WHEN
    const usernameInput = screen.getByRole('heading', /log in/i);

    // THEN
    expect(usernameInput).toBeInTheDocument();
  });
});
