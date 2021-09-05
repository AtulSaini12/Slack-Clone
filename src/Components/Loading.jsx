import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingContainer>
      <img
        src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
        alt="loading-logo"
      />
      <h2>Loading ...</h2>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  > img {
    margin-top: -2em;
    object-fit: contain;
    height: 25%;
    width: 25%;
    padding: 2em;
    padding-bottom: 4em;
    animation: rotate 3s infinite;
  }
  > h2 {
    color: black;
    font-family: monospace;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    border-right: 0.15em solid orange;
    letter-spacing: 0.15em;
    animation: typing 4s infinite, blink-caret 0.5s infinite;
  }
`;
