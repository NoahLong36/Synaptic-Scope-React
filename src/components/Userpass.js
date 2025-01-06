import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Login = ({ database }) => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;
    const user = database.patients.find(
      (patient) => patient.username === username && patient.password === password
    );

    if (user) {
      navigate('/'); // Redirect to the home page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#fff' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>Login</Title>
      <Form
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
