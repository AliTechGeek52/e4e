import React from "react";
import { Layout, Input, Button, Menu, Dropdown } from "antd";
import Logo from "./../../assets/logo.png";
import styled from "styled-components";
import { AudioOutlined, DownOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Header } = Layout;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const menu = (
  <Menu>
    <Menu.Item key="0">1st menu item</Menu.Item>
    <Menu.Item key="1">2nd menu item</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const onSearch = (value) => console.log(value);

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <div>
        <StyledImg src={Logo} alt="logo" />
      </div>
      <div>
        <Dropdown overlay={menu}>
          <Button>
            Categories <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          style={{ verticalAlign: "middle", width: "500px" }}
        />
      </div>
      <div>
        <StyledButton type="primary">Sign Up</StyledButton>
        <StyledButton>Login</StyledButton>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled(Header)`
  background-color: white !important;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 10vh;
  width: 180px;
`;

const StyledButton = styled(Button)`
  margin: 5px;
`;
export default HeaderComponent;
