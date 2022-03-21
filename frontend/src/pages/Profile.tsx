import styled from "../styles/theme-components";
import theme from "../styles/theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Text } from "../components/common/Text";
import { IconButton } from "../components/common/button/IconButton";
import { ProfilePost } from "../components/view/ProfilePost";
import { ProfileInfo } from "../components/view/ProfileInfo";
import { ProfileFriend } from "../components/view/ProfileFriend";
import { ProfileImage } from "../components/view/ProfileImage";
import { ProfileVideo } from "../components/view/ProfileVideo";
import { ProfileCheckIn } from "../components/view/ProfileCheckIn";

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.color.gray};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px;
`;

const Top = styled.section`
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 450px;
`;

const Center = styled.section`
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const MenuWrapper = styled.ul`
  max-width: 908px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 3px;
  border-top: 1px solid ${(props) => props.theme.color.lightGray};
`;

const Menu = styled.li<{ color: string }>`
  border-bottom: 3px solid ${(props) => props.color};
`;

const menuList = [
  "게시물",
  "정보",
  "친구",
  "사진",
  "동영상",
  "체크인",
  "더 보기",
];

const menuUrl = [
  "",
  "#sk=about",
  "#sk=friends",
  "#sk=photos",
  "#sk=videos",
  "#sk=map",
  "",
];

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [click, setClick] = useState<number>(0);
  const handleOnClick = ({ id }: { id: number }) => {
    setClick(id);
    navigate(`${menuUrl[id]}`, { replace: true });
  };

  useEffect(() => {}, [location]);

  return (
    <Wrapper>
      <Top>ProfileTop</Top>
      <Center>
        <MenuWrapper>
          {menuList.map((val, idx) => {
            if (click === idx) {
              return (
                <Menu
                  id={val}
                  onClick={() => {
                    handleOnClick({ id: idx });
                  }}
                  key={idx}
                  color={theme.color.seaBule}
                >
                  <IconButton width={"auto"} hover={false}>
                    <Text
                      text={val}
                      fs={"15px"}
                      fw={600}
                      lh={"20px"}
                      fc={theme.color.seaBule}
                      width={"auto"}
                    />
                  </IconButton>
                </Menu>
              );
            } else {
              return (
                <Menu
                  id={val}
                  onClick={() => {
                    handleOnClick({ id: idx });
                  }}
                  key={idx}
                  color={theme.color.white}
                >
                  <IconButton width={"auto"}>
                    <Text
                      text={val}
                      fs={"15px"}
                      fw={600}
                      lh={"20px"}
                      fc={theme.color.lightBlack}
                      width={"auto"}
                    />
                  </IconButton>
                </Menu>
              );
            }
          })}
        </MenuWrapper>
      </Center>
      {click === 0 && <ProfilePost />}
      {click === 1 && <ProfileInfo />}
      {click === 2 && <ProfileFriend />}
      {click === 3 && <ProfileImage />}
      {click === 4 && <ProfileVideo />}
      {click === 5 && <ProfileCheckIn />}
    </Wrapper>
  );
};

export default Profile;
