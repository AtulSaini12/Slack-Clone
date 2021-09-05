import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { enterChannel } from "../features/appSlice";

const SidebarOption = ({ Icon, title, addChannel, id }) => {
  const [channels, loading, error] = useCollection(db.collection("channels"));
  const dispatch = useDispatch();

  const addChannelOption = () => {
    //add a popup component for this TODO ________________________________________________________________________________________________________________________________________________________________________
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      //add a check if the channel name already exists
      db.collection("channels").add({
        name: channelName,
      });
    }
  };

  const selectChannelOption = () => {
    if (id) {
      dispatch(
        enterChannel({
          channelId: id,
        })
      );
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannel ? addChannelOption : selectChannelOption}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  transition: all 500ms;

  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
