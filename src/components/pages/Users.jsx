import React, { useContext } from "react";
import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
//import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `${val}-test`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaa@example.com",
    phone: "000",
    company: {
      name: "Test corp.",
    },
    website: "https://www.google.co.jp",
  };
});

export const Users = () => {
  //const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>USERS</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Switch</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
