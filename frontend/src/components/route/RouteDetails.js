import React, { useContext, useState } from 'react';
import Header from '../../commons/Header';
import PrimaryButton from '../../commons/PrimaryButton';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import RouteContext from '../../contexts/RouteContext';
import RouteEnd from './RouteEnd';
import Leg from './Leg';
import { IoIosArrowBack } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { FaMap } from 'react-icons/fa';
import ButtonGroupStyles from '../../commons/ButtonGroupStyles';
import { deleteRoute } from '../../service/RouteService';
import MapView from './MapView';

export default function RouteDetails() {
  const history = useHistory();
  const [showMap, setShowMap] = useState(false);
  const { id } = useParams();
  const { routes } = useContext(RouteContext);

  const route = routes?.find((route) => route.routeId === id);
  const legs = route?.legs;
  const endWaypoint = legs && legs[legs.length - 1].endWaypoint;

  if (!showMap) {
    return (
      <PageLayout>
        <Header headerText={route?.routeName} />
        <ul>
          {!legs
            ? null
            : legs.map((leg, index) => (
                <Leg key={leg.legId} leg={leg} index={index} />
              ))}
          <li>
            <RouteEnd endWaypoint={endWaypoint} />
          </li>
        </ul>
        <ButtonGroup>
          <PrimaryButton
            labelButton={'Back'}
            handleClick={redirectToRoutes}
            icon={<IoIosArrowBack />}
          />
          <PrimaryButton
            labelButton={'Mapview'}
            handleClick={toggleView}
            icon={<FaMap />}
          />
          <PrimaryButton
            labelButton={'Delete'}
            handleClick={deleteThisRoute}
            icon={<MdDelete />}
          />
        </ButtonGroup>
      </PageLayout>
    );
  }

  if (showMap) {
    return (
      <MapView
        route={route}
        showMap={showMap}
        setShowMap={setShowMap}
        toggleView={toggleView}
      />
    );
  }

  function redirectToRoutes() {
    history.push('/routes');
  }

  function deleteThisRoute() {
    deleteRoute(id);
    history.push('/routes');
  }

  function toggleView() {
    setShowMap((current) => !current);
  }
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr 60px;
  height: 100vh;

  ul {
    padding: var(--size-s) 0;
    margin-block-start: 0;
    margin-block-end: 0;
    display: grid;
    row-gap: var(--size-l);
    overflow: auto;
    
    li:last-child:after {
      content: '';
      display: block;
      height: var(--size-s);
    }
  }
  
  button + button + button {
  color: darkred;
  }
`;

const ButtonGroup = ButtonGroupStyles;
