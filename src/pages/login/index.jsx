import './index.css';
import { Button,Input,Space, message } from 'antd';
import { UserOutlined,EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router";
import {useState} from "react";


function Login() {
    const navigate = useNavigate(); // 敏跃好厉害 找到了 https://reactrouter.com/docs/en/v6/getting-started/overview#navigation
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="App">
            <div className='login'>
                <Space direction="vertical">
                    <Input
                        onChange={(e)=>{
                            console.log(e.target.value, '账号')
                            setName(e.target.value)}
                        }
                        placeholder="default size"
                        prefix={<UserOutlined />} />
                    <br />
                    <Input.Password
                        onChange={(e) => {
                            console.log(e.target.value, '密码')
                            setPassword(e.target.value)
                        }}
                        placeholder="input password"
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <br/>
                    <Button
                        type="primary"
                        block
                        onClick={()=>{
                            if(name === 'minyue' && password === '123') {
                                message.success('登录成功')
                                navigate('/back')
                            } else {
                                message.error('账号或密码错误！')
                            }
                        }}
                    > 登录 </Button>
                </Space>
                <br/>
            </div>
        </div>
    );
}

export default Login;
