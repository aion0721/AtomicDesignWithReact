import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
export const Top = () => {
  const onClickAdmin = () => {
    alert("admin");
  };
  const onClickGeneral = () => {
    alert("general");
  };
  return (
    <SContainer>
      <h2>TOP</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
      <br />
      <SecondaryButton onClick={onClickGeneral}>Normal</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
