import React, { useContext } from 'react';
import Header from '../../commons/Header';
import styled from 'styled-components/macro';
import PrimaryButton from '../../commons/PrimaryButton';
import { useHistory } from 'react-router-dom';
import { getStormGlassWeather } from '../../service/StormGlassService';
import WeatherDataContext from '../../contexts/WeatherDataContext';
import { MdDashboard } from 'react-icons/md';
import { RiSailboatFill, RiSailboatLine } from 'react-icons/ri';
import ButtonGroupStyles from '../../commons/ButtonGroupStyles';

export default function TrimInput({ course, setCourse, latitude, longitude }) {
  const history = useHistory();
  const { refactoredWeatherData, setRefactoredWeatherData } = useContext(
    WeatherDataContext
  );

  return (
    <PageLayout>
      <Header headerText={'Sail Trim'} />
      <FormStyled>
        <CourseInputStyled>
          <span>Course</span>
          <label htmlFor={'closed_hauled'}>
            <input
            type={'radio'}
            name={'course'}
            id={'closed_hauled'}
            value={'closed_hauled'}
            checked={course === 'closed_hauled'}
            onChange={handleRadioButton}
            />
            Closed Hauled
          </label>
          <label htmlFor={'beam_reach'}>
            <input
            type={'radio'}
            name={'course'}
            id={'beam_reach'}
            value={'beam_reach'}
            checked={course === 'beam_reach'}
            onChange={handleRadioButton}
            />
            Beam Reach
          </label>
          <label htmlFor={'wind_astern'}>
            <input
            type={'radio'}
            name={'course'}
            id={'wind_astern'}
            value={'wind_astern'}
            checked={course === 'wind_astern'}
            onChange={handleRadioButton}
            />
            Wind Astern
          </label>
        </CourseInputStyled>
        <WeatherInputStyled>
          <span>Weather</span>
          <div>
            <label htmlFor={'windSpeed'}>Wind Speed :</label>
            <input
              type={'range'}
              max={'40'}
              id={'windSpeed'}
              name={'windSpeed'}
              value={refactoredWeatherData.windSpeed}
              onChange={handleSliderChange}
            />
            <output><span>{refactoredWeatherData.windSpeed}</span> knots</output>
          </div>
          <div>
            <label htmlFor={'waveHeight'}>Wave Height :</label>
            <input
              type={'range'}
              max={'3'}
              step={'0.1'}
              id={'waveHeight'}
              name={'waveHeight'}
              value={refactoredWeatherData.waveHeight}
              onChange={handleSliderChange}
            />
            <output><span>{refactoredWeatherData.waveHeight}</span> meter</output>
          </div>
        </WeatherInputStyled>
        <PrimaryButton
          labelButton={'Load weather for current location'}
          handleClick={loadWeather}
          disableButton={!latitude || !longitude}
        />
        <PrimaryButton
          labelButton={'Reset'}
          handleClick={resetAllInputData}
          disableButton={
            !refactoredWeatherData.windSpeed &&
            !refactoredWeatherData.waveHeight &&
            !course
          }
        />
      </FormStyled>
      <ButtonGroup>
        <PrimaryButton
          labelButton={'Dashboard'}
          handleClick={redirectToDashboard}
          icon={<MdDashboard />}
        />
        <PrimaryButton
          labelButton={'Main Sail'}
          handleClick={redirectToMainSail}
          disableButton={disableHandler()}
          icon={<RiSailboatFill />}
        />
        <PrimaryButton
          labelButton={'Head Sail'}
          handleClick={redirectToHeadSail}
          disableButton={disableHandler()}
          icon={<RiSailboatLine />}
        />
      </ButtonGroup>
    </PageLayout>
  );

  function handleRadioButton(event) {
    setCourse(event.target.value);
  }

  function handleSliderChange(event) {
    setRefactoredWeatherData({
      ...refactoredWeatherData,
      [event.target.name]: event.target.value,
    });
  }

  function loadWeather() {
    getStormGlassWeather(latitude, longitude).then((data) =>
      setRefactoredWeatherData({
        ...refactoredWeatherData,
        windSpeed: Math.ceil(data.windSpeed),
        waveHeight: data.waveHeight === 999 ? 0 : data.waveHeight,
      })
    );
  }

  function redirectToDashboard() {
    history.push('/dashboard');
  }

  function disableHandler() {
    return !(
      course &&
      refactoredWeatherData.windSpeed &&
      refactoredWeatherData.waveHeight &&
      refactoredWeatherData.windSpeed !== 0 &&
      refactoredWeatherData.waveHeight !== 0
    );
  }

  function redirectToMainSail() {
    history.push('/mainsail');
  }

  function resetAllInputData() {
    setCourse(null);
    setRefactoredWeatherData({
      ...refactoredWeatherData,
      windSpeed: 0,
      waveHeight: 0,
    });
  }

  function redirectToHeadSail() {
    history.push('/headsail');
  }
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  height: 100vh;
`;

const FormStyled = styled.form`
  display: grid;
  grid-template-rows: min-content min-content min-content min-content;
  row-gap: var(--size-xl);
  
  label, span {
  font-weight: bold;
  }
  
  button {
  outline: none;
  }
  
  button + button {
  color: darkred;
  }
`;

const CourseInputStyled = styled.section`
  display: grid;
  grid-template-rows: 1.5fr 1fr 1fr 1fr;
  row-gap: var(--size-s);
  margin: var(--size-m);
`;

const WeatherInputStyled = styled.section`
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr;
  margin: var(--size-m);
  
  div {
  display: grid;
  row-gap: var(--size-xxs);
  margin: var(--size-s);
  }
`

const ButtonGroup = ButtonGroupStyles;
