import TrimInput from "./TrimInput";
import { render, screen } from '@testing-library/react';
import {MemoryRouter as Router} from "react-router-dom";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('component test :: TrimInput', () => {
    it('renders the TrimInput page and it\'s content', () => {
        // GIVEN
        render(
            <Router>
                <TrimInput/>
            </Router>
        );

        // WHEN
        const inputHeader = screen.queryByRole('heading', {name: /sail trim/i});

        // THEN
        expect(inputHeader).toBeInTheDocument();
    });

    test('button "Dashboard" redirects to correct page', () => {
       // GIVEN
       render(
           <Router>
               <TrimInput/>
           </Router>
       );

       // WHEN
        const dashboardButton = screen.getByRole('button', {name: /dashboard/i});
        userEvent.click(dashboardButton);

        // THEN
        expect(screen.getByRole('heading', /ahoi/i)).toBeInTheDocument();
    });

    test('button "Main Sail" redirects to correct page', () => {
        // GIVEN
        render(
            <Router>
                <TrimInput/>
            </Router>
        );

        // WHEN
        const mainSailButton = screen.getByRole('button', {name: /main sail/i});
        userEvent.click(mainSailButton);

        // THEN
        expect(screen.getByRole('heading', /main sail/i)).toBeInTheDocument();
    })

    test('button "Head Sail" redirects to correct page', () => {
        // GIVEN
        render(
            <Router>
                <TrimInput/>
            </Router>
        );

        // WHEN
        const headSailButton = screen.getByRole('button', {name: /head sail/i});
        userEvent.click(headSailButton);

        // THEN
        expect(screen.getByRole('heading', /head sail/i)).toBeInTheDocument();
    });
});