import styled from "../styles/theme-components";

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.color.gray};
  width: 100%;
`;

const Profile = () => {
  return <Wrapper>Profile</Wrapper>;
};

export default Profile;
