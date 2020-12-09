import React from "react";
import { Layout, Row, Col, Collapse } from "antd";
import HeaderComponent from "./../Header/HeaderComponent";
import styled from "styled-components";
import video from "./../../assets/sample-video.webm";

const { Content } = Layout;
const { Panel } = Collapse;

const Homepage = () => {
  return (
    <StyledLayout>
      <HeaderComponent />
      <StyledContent>
        <IntroRow>
          <StyledCol span={12}>
            <StyledHeading>
              Lorem Ipsum is simply dummy text of the{" "}
            </StyledHeading>
            <SubHeading>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </SubHeading>
          </StyledCol>
          <StyledCol span={12}>
            <video controls>
              <source src={video} type="video/webm"></source>
            </video>
          </StyledCol>
        </IntroRow>
        {/* Voice feature section */}
        <Row style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          <StyledCol span={12}>
            <AvatarDiv>Interact With Voice</AvatarDiv>
          </StyledCol>
          <CenteredCol span={12}>
            <StyledHeading>Interact With Voice</StyledHeading>
            <SubHeading>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </SubHeading>
          </CenteredCol>
        </Row>
        {/* Avatar Section */}
        <Row
          style={{
            paddingTop: "2em",
            backgroundColor: "#4b90ff",
            paddingBottom: "2em",
          }}
        >
          <StyledCol span={12}>
            <AvatarDiv>Your Avatar</AvatarDiv>
          </StyledCol>
          <CenteredCol span={12}>
            <StyledHeading>Create your own avatar</StyledHeading>
            <SubHeading>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </SubHeading>
          </CenteredCol>
        </Row>
        {/* Faq */}
        <Row style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          <Col span={24}>
            <FAQHeading>FAQ</FAQHeading>
          </Col>
          <Col span={24}>
            <Collapse>
              <Panel header="This is panel header 1" key="1">
                <p>Hello World</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>Hello World</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>Hello World</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>
      </StyledContent>
    </StyledLayout>
  );
};

const StyledLayout = styled(Layout)`
  height: 100vh;
  background-color: white !important;
`;

const StyledContent = styled(Content)`
heightL80vh;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const IntroRow = styled(Row)`
  background-color: #4b90ff;
  padding-top: 3em;
  height: 400px;
`;

const StyledHeading = styled.h1`
  font-size: 40px;
  font-weight: bold;
  width: 400px;
`;

const FAQHeading = styled(StyledHeading)`
  width: 100%;
  text-align: center;
`;
const CenteredCol = styled(StyledCol)`
  justify-content: center;
`;
const SubHeading = styled.h5`
  font-size: 15px;
  width: 400px;
`;

const AvatarDiv = styled.div`
  height: 250px;
  width: 350px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;

export default Homepage;
