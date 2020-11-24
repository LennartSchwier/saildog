import TrimInput from "./TrimInput";
import { render } from '@testing-library/react';
import {MemoryRouter as Router} from "react-router-dom";

describe('component test :: TrimInput', () => {
    it('renders the TrimInput page and it\'s content', () => {
        // GIVEN
        const {queryByRole} = render(
            <Router>
                <TrimInput/>
            </Router>
        );

        // WHEN
        const inputHeader = queryByRole('heading', {name: /sail trim/i});

        // THEN
        expect(inputHeader).toBeInTheDocument();
    });
});