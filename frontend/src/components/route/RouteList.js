import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import Header from '../../commons/Header';
import PrimaryButton from '../../commons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import Route from './Route';
import RouteContext from '../../contexts/RouteContext';
import ButtonGroupStyles from '../../commons/ButtonGroupStyles';
import { IoIosAdd } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';

export default function RouteList() {
  const history = useHistory();
  const { routes } = useContext(RouteContext);

  return (
    <PageLayout>
      <Header headerText={'Routes'} />
      <ul>
        {routes?.map((route) => (
          <li key={route.routeId}>
            <Route route={route} />
          </li>
        ))}
      </ul>
      <ButtonGroup>
        <PrimaryButton
          labelButton={'Dashboard'}
          handleClick={redirectToDashboard}
          icon={<MdDashboard />}
        />
        <PrimaryButton
          labelButton={'New Route'}
          handleClick={redirectToNewRoute}
          icon={<IoIosAdd />}
        />
      </ButtonGroup>
    </PageLayout>
  );

  function redirectToDashboard() {
    history.push('/dashboard');
  }

  function redirectToNewRoute() {
    history.push('/newroute');
  }
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: min-content min-content 60px;
  height: 100vh;

  ul {
    list-style: none;
    margin: 0;
    padding: var(--size-s) 0;
    display: grid;
    row-gap: var(--size-l);
    overflow: auto;

    li:last-child:after {
      content: '';
      display: block;
      height: var(--size-s);
    }
  }
`;

const ButtonGroup = ButtonGroupStyles;
