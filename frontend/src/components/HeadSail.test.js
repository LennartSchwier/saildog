import HeadSail from "./HeadSail";
import { render, screen } from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';
import React from "react";
import userEvent from "@testing-library/user-event";

describe('component test :: HeadSail', () => {

    const renderPage = () => {
        render(
            <Router>
                <HeadSail/>
            </Router>
        );
    }

    it('renders the HeadSail page and it\'s content', () => {
        // GIVEN
        renderPage()

        // WHEN
        const headSailHeader = screen.queryByRole('heading', /head sail/i);

        // THEN
        expect(headSailHeader).toBeInTheDocument();
    });

    test('button "back" redirects to correct page', () => {
        // GIVEN
        renderPage();

        // WHEN
        const backButton = screen.getByRole('button', /back/i);
        userEvent.click(backButton);


        // THEN
        expect(screen.getByRole('heading', /sail trim/i)).toBeInTheDocument();
    });
});