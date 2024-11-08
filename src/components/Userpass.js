import { Form, Input, Button} from "antd";
import "../styles/userpass.css";

function Userpass() {

  const onFinish=(e)=>{
    console.log(e)
  }
  return (
    <div className="userpass">
      <header className="userpass-header">
        <Form onFinish={onFinish}>
          <Form.Item label='Username' name='username'>
          <Input placeholder="Username" required></Input>  
          </Form.Item>
          <Form.Item label='Password' name='password'>
          <Input.Password placeholder="Password" required></Input.Password>  
          </Form.Item>
          <Form.Item>
          <Button block type='primary' htmlType='submit'>Log In</Button>  
          <Button type='primary' htmlType='submit'>Log In</Button>  
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default Userpass;