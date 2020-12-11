import { useHistory } from 'react-router-dom';
import useTrimData from '../../hooks/useTrimData';
import Header from '../../commons/Header';
import PrimaryButton from '../../commons/PrimaryButton';
import styled from 'styled-components/macro';
import React, { useContext } from 'react';
import WeatherDataContext from '../../contexts/WeatherDataContext';
import ButtonGroupStyles from '../../commons/ButtonGroupStyles';
import { IoIosArrowBack } from 'react-icons/io';

export default function MainSail({ course }) {
  const history = useHistory();
  const { refactoredWeatherData } = useContext(WeatherDataContext);
  const { mainSailTrimData } = useTrimData(
    course,
    refactoredWeatherData.windSpeed,
    refactoredWeatherData.waveHeight
  );

  const getTextualOutput = (input) => input?.replace('_', ' ').toLowerCase();

  return (
    <PageLayout>
      <Header headerText={'Main Sail'} />
      <InputField>
        <div>
          <div>Course:</div>
          <Bold>{getTextualOutput(course)}</Bold>
        </div>
        <div>
          <div>Wind Speed:</div>
          <Bold>{refactoredWeatherData.windSpeed} knots</Bold>
        </div>
        <div>
          <div>Wave Height:</div>
          <Bold>{refactoredWeatherData.waveHeight} meter</Bold>
        </div>
      </InputField>
      <OutputField>
        <div>
          <div>Sheet:</div>
          {mainSailTrimData && (
            <Bold>{getTextualOutput(mainSailTrimData.mainSailSheet)}</Bold>
          )}
        </div>
        <div>
          <div>Traveller:</div>
          {mainSailTrimData && (
            <Bold>{getTextualOutput(mainSailTrimData.traveller)}</Bold>
          )}
        </div>
        <div>
          <div>Boom Vang:</div>
          {mainSailTrimData && (
            <Bold>{getTextualOutput(mainSailTrimData.boomVang)}</Bold>
          )}
        </div>
        <div>
          <div>Luff:</div>
          {mainSailTrimData && (
            <Bold>{getTextualOutput(mainSailTrimData.mainSailLuff)}</Bold>
          )}
        </div>
        <div>
          <div>Foot:</div>
          {mainSailTrimData && (
            <Bold>{getTextualOutput(mainSailTrimData.mainSailFoot)}</Bold>
          )}
        </div>
      </OutputField>
      <ButtonGroup>
        <PrimaryButton
          labelButton={'Back'}
          handleClick={redirectToInput}
          icon={<IoIosArrowBack />}
        />
      </ButtonGroup>
    </PageLayout>
  );

  function redirectToInput() {
    history.push('/triminput');
  }
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 6fr 60px;
  row-gap: var(--size-xl);
  height: 100vh;
`;

const InputField = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.9em;

  div > span {
    font-weight: bold;
  }
`;

const OutputField = styled.div`
  margin: var(--size-m);
  font-size: 1.1em;

  div {
    display: flex;
    align-items: center;
    margin: var(--size-s);
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

const ButtonGroup = ButtonGroupStyles;
