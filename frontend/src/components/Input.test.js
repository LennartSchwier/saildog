import Input from "./Input";
import { render } from '@testing-library/react';
import {MemoryRouter as Router} from "react-router-dom";

describe('component test :: Input', () => {
    it('renders the Input page and it\'s content', () => {
        // GIVEN
        const {queryByRole} = render(
            <Router>
                <Input/>
            </Router>
        );

        // WHEN
        const inputHeader = queryByRole('heading', {name: /sail trim/i});

        // THEN
        expect(inputHeader).toBeInTheDocument();
    });
});