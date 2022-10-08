import React, { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
export const Top = () => {
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
  return (
    <SContainer>
      <h2>TOP</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>Normal</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
