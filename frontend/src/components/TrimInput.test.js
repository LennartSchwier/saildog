import TrimInput from "./TrimInput";
import { render, screen } from '@testing-library/react';
import {MemoryRouter as Router} from "react-router-dom";
import React from "react";
import userEvent from "@testing-library/user-event";

describe('component test :: TrimInput', () => {

    const renderPage = () => {
        render(
            <Router>
                <TrimInput/>
            </Router>
        );
    }

    xit('renders the TrimInput page and it\'s content', () => {
        // GIVEN
        renderPage();

        // WHEN
        const inputHeader = screen.queryByRole('heading', /sail trim/i);

        // THEN
        expect(inputHeader).toBeInTheDocument();
    });

    xtest('button "Dashboard" redirects to correct page', () => {
       // GIVEN
       renderPage();

       // WHEN
        const dashboardButton = screen.getByRole('button', {name: /dashboard/i});
        userEvent.click(dashboardButton);

        // THEN
        expect(screen.getByRole('heading', /ahoi/i)).toBeInTheDocument();
    });

    xtest('button "Main Sail" redirects to correct page', () => {
        // GIVEN
        renderPage();

        // WHEN
        const mainSailButton = screen.getByRole('button', {name: /main sail/i});
        userEvent.click(mainSailButton);

        // THEN
        expect(screen.getByRole('heading', /main sail/i)).toBeInTheDocument();
    })

    xtest('button "Head Sail" redirects to correct page', () => {
        // GIVEN
        renderPage();

        // WHEN
        const headSailButton = screen.getByRole('button', {name: /head sail/i});
        userEvent.click(headSailButton);

        // THEN
        expect(screen.getByRole('heading', /head sail/i)).toBeInTheDocument();
    });
});