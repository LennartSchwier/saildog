import HeadSail from "./HeadSail";
import { render } from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';

describe('component test :: HeadSail', () => {
    it('renders the HeadSail page and it\'s content', () => {
        // GIVEN
        const {queryByRole} = render(
            <Router>
                <HeadSail/>
            </Router>
        );

        // WHEN
        const headSailHeader = queryByRole('heading', {name: /head sail/i});

        // THEN
        expect(headSailHeader).toBeInTheDocument();
    });
});