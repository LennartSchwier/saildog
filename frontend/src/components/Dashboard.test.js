import {render, screen} from '@testing-library/react';
import Dashboard from "./Dashboard";
import {MemoryRouter as Router} from "react-router-dom";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('Dashboard', () => {
   test('button "Trim Input" redirects to correct page', () => {
       // GIVEN
       render(
           <Router>
               <Dashboard/>
           </Router>
       );

       // WHEN
       const trimInputButton = screen.getByRole('button', {name: /trim input/i});
       userEvent.click(trimInputButton);

       // THEN
       expect(screen.getByRole('heading', /sail trim/i)).toBeInTheDocument();
   });
});
