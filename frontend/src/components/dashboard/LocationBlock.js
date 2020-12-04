import React from "react";
import styled from "styled-components/macro";

export default function LocationBLock({latitude, longitude, errorMessage}) {

    if (errorMessage) {
        return (
            <StyledDashboardSection>
                <section>Location:</section>
                <div className={"error"}>{errorMessage}</div>
            </StyledDashboardSection>
        );
    }
    if (latitude && longitude) {
        return (
            <StyledDashboardSection>
                <section>Location:</section>
                <div>
                    <div>Latitude: <Bold>{latitude}</Bold></div>
                    <div>Longitude: <Bold>{longitude}</Bold></div>
                </div>
            </StyledDashboardSection>
        );
    }
    if (!latitude || !longitude) {
        return (
            <StyledDashboardSection>
                <section>Location:</section>
                <div>Searching position...</div>
            </StyledDashboardSection>
        );
    }
}

const StyledDashboardSection = styled.section`
margin: 0 var(--size-l);
background-color: Transparent;
box-shadow: 2px 2px var(--size-s) grey;
border-radius: var(--size-m);
padding: var(--size-m);
backdrop-filter: blur(2px);

  section {
  margin-bottom: var(--size-l);
  }

  div {
  display: grid;
  row-gap: var(--size-m);
  margin: 0 var(--size-m);
  }
  
  div > div {
  display: flex;
  }
  
  .error {
  margin: var(--size-s);
  color: red;
  }
`

const Bold = styled.span`
font-weight: bold;
margin-left: var(--size-m);
`
