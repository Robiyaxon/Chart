// import React from 'react';
// import { Redirect } from 'react-router-dom';
// const Login = (props) => {
//       const AddName = (event) => {
//             let text = event.target.value
//             props.upDateNewNameAC(text)
//       }
//       const AddEmail = (event) => {
//             let text = event.target.value
//             props.upDateNewEmailAC(text)
//       }
//       const AddPassword = (event) => {
//             let text = event.target.value
//             props.upDateNewPasswordAC(text)
//       }

//       const send = () => {
//             console.log("name:" + " '" + props.name + "' " + "email:" + "'" +  props.email + " '" + "password:" + "' " + props.password + "'")
//       }
//       if (props.isAuth) {
//             return <Redirect to={'/Chart'}/>
//         }
//       return (
//             <div>
//                   <input onChange={AddName} value={props.name} 
//                   type="text" placeholder='Name*' />
//                   <input onChange={AddEmail} value={props.email} 
//                   type="text" placeholder='Email*' />
//                   <input onChange={AddPassword} value={props.password} type="password" placeholder='Password*' />
//                   <button onClick={send}>Kirish</button>
//             </div>
//       )
// }

// export default Login
import { Button, Form, Input, Row } from 'antd';
import style from "./Login.module.css"
import Layout from 'antd/lib/layout/layout';
import { rules } from './../../Utils/Rules';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from '../../Redux/Login/action-creators';
import { Redirect } from 'react-router-dom';
import Checkbox from 'antd/lib/checkbox/Checkbox';
const LoginForm = (props) => {
      const dispatch = useDispatch()
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

      const send = () => {
            if( props.prop.name!=="" && props.prop.email!=="" && props.prop.password!==""){
             props.prop.UpdateIsAuthAC(true)
                
            }
            
      }
      function submit() {
            dispatch(AuthActionCreators.login("", ""))
      }
      if (props.prop.isAuth) {
            return <Redirect to={'/Chart'}/>
        }
      return (
            
            <Form onFinish={submit}  className={style.Wrapper} >
                  <Form.Item className={style.Input1} onChange={AddName} value={props.prop.name} label="Name " name="UserName" rules={[rules.required("Please input name!")]}>
                        <Input />
                  </Form.Item>
                  <Form.Item className={style.Input1} onChange={AddEmail} value={props.prop.email} label="Email" name="Email" rules={[rules.required("Please input Email!")]}>
                        <Input/>
                  </Form.Item>
                  <Form.Item className={style.Input1} onChange={AddPassword} value={props.prop.password} label="Parol" name="password" rules={[rules.required("Please input password!")]}>
                  <Input.Password />
                  </Form.Item>
                  <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox style={{color:"white"}}>Remember me</Checkbox>
      </Form.Item>
                  <Form.Item className={style.Input1} wrapperCol={{ offset: 8, span: 16 }}>
                        <Button onClick={send} type='primary' htmlType='submit'>
                              Kirish
                        </Button>
                  </Form.Item>

            </Form>
      )
}
const Login = (props) => {
      return (
            <div className={style.Login}>
                  <Layout style={{ backgroundColor: "transparent", color: "white" }}>
                        <Row justify='center' align='middle'>
                              <LoginForm prop = {props} />
                        </Row>
                  </Layout>
            </div>
      )
}
export default Login;