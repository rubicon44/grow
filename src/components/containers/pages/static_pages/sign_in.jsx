// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const LoginBackground = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 460px;
//   text-align: center;
//   background-color: #f8f7f3;
// `

// const Title = styled.h1`
//   width: 288px;
//   font-size: 36px;
//   font-family: YuMincho;
// `

// const LoginFormGroup = styled.dl`
//   > dt {
//     font-size: 28px;
//     font-weight: bold;
//   }

//   > dd {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     margin: auto;
//   }
// `

// const LoginForm = styled.form`
//   width: 100%;
// `

// const LoginFormTable = styled.table`
//   display: block;

//   > td {
//     display: block;

//     &:last-of-type {
//       margin-top: 26px;
//     }
//   }
// `

// const LoginFormInput = styled.input`
//   width: 345px;
//   height: 48px;
//   padding: 12px 18px;
//   border: 1px solid #d7d7d7;
//   box-sizing: border-box;

//   &::placeholder {
//     color: #bbb;
//   }
// `

// const ButtonStyle = styled.button`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 220px;
//   height: 50px;
//   color: #fff;
//   font-size: 20px;
//   font-weight: bold;
//   text-decoration: none;
//   border: none;
//   border-radius: 50px;
//   background-color: #ff444f;
//   cursor: pointer;
// `

// const LoginButtonCover = styled.div`
//   margin: 18px 0;
// `

// const OtherText = styled(Link)`
//   color: #ff444f;

//   &:last-of-type {
//     margin-top: 12px;
//   }
// `

// class SignIn extends Component {
//   render() {
//       return (
//         <div className="App">
//           <LoginBackground>
//               <Title>Grow</Title>
//               {/* loginForm.js */}
//               <LoginFormGroup>
//                   <dt>ログイン</dt>
//                   <dd>
//                       <LoginForm>
//                           <LoginFormTable>
//                               <td><LoginFormInput type="text" name="ユーザー名 or メールアドレス" placeholder="ユーザー名 or メールアドレス"></LoginFormInput></td>
//                               <td><LoginFormInput type="text" name="パスワード" placeholder="パスワード"></LoginFormInput></td>
//                               <div id="recaptcha-container"></div>
//                           </LoginFormTable>
//                       </LoginForm>
//                   </dd>
//               </LoginFormGroup>
//               {/* loginButton.js */}
//               <LoginButtonCover>
//                 <ButtonStyle onClick={this.handleLogin}>ログイン</ButtonStyle>
//               </LoginButtonCover>
//               {/* 新規登録.js */}
//               <OtherText to="/sign_up">新規会員登録はこちら</OtherText>
//               {/* パスワードをお忘れの方.js */}
//               <OtherText to="#">パスワードをお忘れの方</OtherText>
//           </LoginBackground>
//         </div>
//       )
//   }
// };

// export default SignIn;

import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../../../../auth/authProvider';
import Header from '../../organisms/header';

const SignIn = ({ history }) => {
  const { signin } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signin(email.value, password.value, history);
  };

  return (
    <div>
      <Header />
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);