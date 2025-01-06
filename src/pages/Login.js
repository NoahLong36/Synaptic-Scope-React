import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { useUser } from '../UserContext';

const Login = ({ database }) => {
  const { login } = useUser();
  const [error, setError] = useState(null);

  const handleFinish = (values) => {
    const user = database.patients.find(
      (patient) =>
        patient.username === values.username && patient.password === values.password
    );
    if (user) {
      login(user);
      setError(null); // Clear any previous error
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', border: '1px solid #d9d9d9', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: '16px' }}
        />
      )}
      <Form
        layout="vertical"
        onFinish={handleFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input placeholder="Enter your username" style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password
            placeholder="Enter your password"
            style={{ width: '100%' }}
            iconRender={(visible) => (
              <span
                style={{ position: 'absolute', right: '8px', cursor: 'pointer' }}
              >
                {visible ? '🙈' : '👁️'}
              </span>
            )}
          />
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
