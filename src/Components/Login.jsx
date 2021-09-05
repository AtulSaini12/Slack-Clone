import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((err) => {
      console.log(err);
    });
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack-logo"
        />
        <h1>Sign In to Slack</h1>
        <p>This is my personal Slack</p>

        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  background-color: var(--slack-color);
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 3em;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > Button {
    margin-top: 3em;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    transition: all 400ms;
    border-radius: 8px;

    :hover {
      background-color: #065f30 !important ;
      border-radius: 15px;
    }
  }

  @media only screen and (max-width: 480px) {
    > img {
      height: 60px;
    }

    > h1 {
      font-size: 1.5rem;
    }

    > p {
      font-size: 0.8rem;
    }
  }
`;
