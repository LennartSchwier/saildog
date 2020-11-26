
import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App';
import MemoryRouter from "react-router-dom";

describe("header", () => {
  xtest("'Dashbord' links to the correct page", () => {
    render(
        <MemoryRouter>
          <App/>
        </MemoryRouter>
    );


    screen.debug();
  });
});
