import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { db, timestamp } from "../firebase";

const ChatInput = ({ chatRef, channelName, channelId }) => {
  const inputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("channels").doc(channelId).collection("messages").add({
      message: inputRef.current.value,
      timestamp: timestamp,
      user: "Atul Saini",
      userImage: "add picture",
    });

    chatRef.current.scrollIntoView({
      behaviour: "smooth",
    });

    inputRef.current.value = "";
  };

  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Send message to #${channelName}`} ref={inputRef} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 50%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1.5em;
    margin-left: -5em;
    outline: none;
  }

  > form > button {
    position: fixed;
    bottom: 30px;
    width: fit-content;
    padding: 1.3em;
    right: 5%;
    padding-top: 1em;
    border: 1px solid gray;
    background-color: var(--slack-color);
    color: whitesmoke;
    font-weight: 600;
    transition: all 500ms;

    :hover {
      background-color: #6a1a6b;
      color: white;
      font-weight: 700;
      border-radius: 30px;
    }
  }
`;
