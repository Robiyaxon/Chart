import { Button, Form, Input, Row } from 'antd'
import style from "./Login.module.css"
import logo from "../../picture/logo24.png"
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import Layout from 'antd/lib/layout/layout'
import { rules } from './../../Utils/Rules'
import { Redirect } from 'react-router-dom'
import Checkbox from 'antd/lib/checkbox/Checkbox'
const LoginForm = (props) => {
      const AddName = (event) => {
            let text = event.target.value
            props.prop.upDateNewNameAC(text)
      }
      const AddEmail = (event) => {
            let text = event.target.value
            props.prop.upDateNewEmailAC(text)
      }
      const AddPassword = (event) => {
            let text = event.target.value
            props.prop.upDateNewPasswordAC(text)
      }
      if (props.prop.isAuth) {
            return <Redirect to={'/Chart'} />
      }
      const send = () => {
            if (props.prop.name != "" && props.prop.email != "" && props.prop.password != "") {
                  props.prop.UpdateIsAuthAC(true);
                  props.prop.upDateNewPasswordAC("")
                  props.prop.upDateNewEmailAC("")
                  props.prop.upDateNewNameAC("")
            }
      }
      return (
            <>
                  <Form className={style.Wrapper}>
                        <h1>Zapraszamy</h1>
                        <div>
                              <Form.Item className={style.Input1} onChange={AddName} value={props.prop.name} label="Name " name="UserName" rules={[rules.required("Please input name!")]}>
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} />
                              </Form.Item>
                              <Form.Item className={style.Input1} onChange={AddEmail} value={props.prop.email} label="Email" name="Email" rules={[rules.required("Please input Email!")]}>
                                    <Input prefix={<MailOutlined className="site-form-item-icon" />} />
                              </Form.Item>
                              <Form.Item className={style.Input1} onChange={AddPassword} value={props.prop.password} label="Parol" name="password" rules={[rules.required("Please input password!")]}>
                                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
                              </Form.Item>
                              <Form.Item >
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                          <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <a className="login-form-forgot" href="">
                                          Forgot password
                                    </a>
                              </Form.Item>
                              <Form.Item className={style.Input1} wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button className={style.button} onClick={send} type='primary' htmlType='submit'>
                                          Kirish
                                    </Button>
                              </Form.Item>
                        </div>

                        <img src={logo} alt="" />
                  </Form>
            </>

      )
}
const Login = (props) => {
      return (
            <div className={style.Login}>
                  <Layout style={{ backgroundColor: "transparent", color: "white" }}>
                        <Row justify='center' align='middle'>
                              <LoginForm prop={props} />

                        </Row>
                  </Layout>
            </div>
      )
}
export default Login