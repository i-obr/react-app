import styled from 'styled-components';

export const ContentWrap = styled.div`
  position: relative;
`;

export const Pages = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 246px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 246px;
  height: 100vh;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #111;
`;

export const NavBar = styled.nav`
  & a {
    display: block;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    padding: 20px;
  }

  & a.active {
    background-color: #0099ff;
  }
`;

export const Title = styled.h1`
  padding: 0 20px;
  margin-top: 0;
  font-size: 28px;
  color: #ffcc00;
`;

export const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  color: #111;
`;

export const ContentInner = styled.div`
  background-color: #fff;
  padding: 20px;
`;

export const Button = styled.button`
  font-size: 16px;
  margin: 0 10px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
