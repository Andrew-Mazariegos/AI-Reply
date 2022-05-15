import React, { Fragment } from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import HeaderBar from "../components/HeaderBar";
import { login } from "../services/firebase-auth";

const { Title } = Typography;

const Login = () => {
    const onFinish = (values) => {
        const { username, password } = values;

        login(username, password);
    };

    return (
        <Fragment>
            <HeaderBar />
            <Content
                style={{
                    padding: "50px 50px",
                }}
            >
                <Row justify="center" style={{ marginTop: "10vh" }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Title level={1} style={{ textAlign: "center" }}>
                            Login
                        </Title>
                    </Col>
                </Row>
                <Row justify="center" style={{ marginTop: "4vh" }}>
                    <Col xs={23} sm={15} md={13} lg={11} xl={7}>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Username!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={
                                        <UserOutlined className="site-form-item-icon" />
                                    }
                                    placeholder="Username"
                                    id="username"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    prefix={
                                        <LockOutlined className="site-form-item-icon" />
                                    }
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{
                                        width: "102%",
                                        marginBottom: "10px",
                                    }}
                                    block
                                    size="small"
                                >
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Content>
        </Fragment>
    );
};

export default Login;
