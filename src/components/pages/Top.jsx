import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
export const Top = () => {
  const navigate = useNavigate();

  const onClickAdmin = () => {
    navigate("/users", { state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    navigate("/users", { state: { isAdmin: false } });
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
