import React from "react";
import { Layout, Row, Col, Input, Button } from "antd";
import {
  SendOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer>
      <Row>
        <Col
          span={12}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div>
            <ul className="list">
              <li>
                <strong> Subjects</strong>
              </li>
              <li>Math</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>English</li>
              <li>Urdu</li>
              <li>Science</li>
            </ul>
          </div>
          <div>
            <ul className="list">
              <li>
                <strong> Classes</strong>
              </li>
              <li>Grade1</li>
              <li>Grade2</li>
              <li>Grade3</li>
              <li>Grade4</li>
              <li>Grade5</li>
              <li>Grade6</li>
            </ul>
          </div>
          <div>
            <ul className="list">
              <li>
                <strong>More</strong>
              </li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Vision</li>
              <li>Help</li>
            </ul>
          </div>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ marginLeft: "3em" }}>
            <h1>Subscribe</h1>
          </div>
          <div style={{ marginLeft: "3em" }}>
            <Input placeholder="Your email" style={{ width: "200px" }} />
            <Button type="primary" style={{ margin: "5px" }}>
              <SendOutlined color="white" />
            </Button>
          </div>
        </Col>
        <Col
          span={24}
          style={{
            marginTop: "1em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <InstagramOutlined style={{ fontSize: "3em", margin: "1em" }} />
          <FacebookOutlined style={{ fontSize: "3em", margin: "1em" }} />
          <LinkedinOutlined style={{ fontSize: "3em", margin: "1em" }} />
          <TwitterOutlined style={{ fontSize: "3em", margin: "1em" }} />
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
