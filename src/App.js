import './App.css';
import { Button,Input,Space } from 'antd';
import { UserOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


function App() {
  //const navigate = useNavigate();
  return (
    <div className="App">
      <div className='login'>
      <Space direction="vertical">
        <Input placeholder="default size" prefix={<UserOutlined />} />
        <br />
        <Input.Password
         placeholder="input password"
         iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <br/>
        <Button type="primary" block > 登录 </Button> 
      </Space>
      <br/>
      </div>
    </div>
  );
}

export default App;
