import MainSail from "./MainSail";
import { render } from '@testing-library/react';
import {MemoryRouter as Router} from "react-router-dom";

describe('component test :: MainSail', () => {
    it('renders the MainSail page and it\'s content', () => {
        // GIVEN
        const {queryByRole} = render(
            <Router>
                <MainSail/>
            </Router>
        );

        // WHEN
        const mainSailHeader = queryByRole('heading', {name: /main sail/i});

        // THEN
        expect(mainSailHeader).toBeInTheDocument();
    });
});