import Dashboard from "./Dashboard";
import { render } from '@testing-library/react';
import {MemoryRouter as Router} from "react-router-dom";

describe('component test :: Dashboard', () => {
    it('renders the Dashboard page and it\'s content', () => {
        // GIVEN
        const {queryByRole} = render(
            <Router>
                <Dashboard/>
            </Router>
        );

        // WHEN
        const dashboardHeader = queryByRole('heading', {name: /dashboard/i});

        // THEN
        expect(dashboardHeader).toBeInTheDocument();
    });
});