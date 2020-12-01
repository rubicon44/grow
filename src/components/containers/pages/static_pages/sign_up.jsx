// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const RegistrationBackground = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   background-color: #f8f7f3;
// `

// const Title = styled.h1`
//   width: 288px;
//   font-size: 36px;
//   font-family: YuMincho;
// `

// const RegistrationFormGroup = styled.dl`
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

// const RegistrationForm = styled.form`
//   width: 100%;
// `

// const RegistrationFormTable = styled.table`
//   display: block;

//   > td {
//     display: block;

//     &:not(:first-of-type) {
//       margin-top: 26px;
//     }
//   }
// `

// const RegisrationFormInput = styled.input`
//   width: 345px;
//   height: 48px;
//   padding: 12px 18px;
//   border: 1px solid #d7d7d7;
//   box-sizing: border-box;

//   &::placeholder {
//     color: #bbb;
//   }
// `

// const NextRegistrationButtonCover = styled.div`
//   margin: 18px 0;
// `

// const OtherText = styled(Link)`
//   color: #ff444f;

//   &:last-of-type {
//     margin-top: 12px;
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

// export default class SignUp extends Component {
//   render() {
//     return (
//         <div className="App">
//         <RegistrationBackground>
//             <Title>Grow</Title>
//             {/* loginForm.js */}
//             <RegistrationFormGroup>
//                 <dt>基本情報入力</dt>
//                 <dd>
//                   <RegistrationForm>
//                       <RegistrationFormTable>
//                         <td><RegisrationFormInput type="text" name="ユーザー名" placeholder="ユーザー名"></RegisrationFormInput></td>
//                         <td><RegisrationFormInput type="text" name="メールアドレス" placeholder="メールアドレス"></RegisrationFormInput></td>
//                         <td><RegisrationFormInput type="text" name="パスワード" placeholder="パスワード"></RegisrationFormInput></td>
//                         <td><RegisrationFormInput type="text" name="確認パスワード" placeholder="確認パスワード"></RegisrationFormInput></td>
//                       </RegistrationFormTable>
//                       <div id="recaptcha-container"></div>
//                   </RegistrationForm>
//                 </dd>
//                 </RegistrationFormGroup>
//                 {/* 男性、女性チェックリストコンポーネント.js */}
//                 {/* nextRegistration.js */}
//                 <NextRegistrationButtonCover>
//                   <ButtonStyle onClick={this.handleSignup} >登録</ButtonStyle>
//                 </NextRegistrationButtonCover>
//                 {/* login.js */}
//                 <NextRegistrationButtonCover>
//                   <OtherText to="/sign_in">アカウントをお持ちの方はこちらからログイン</OtherText>
//                 </NextRegistrationButtonCover>
//         </RegistrationBackground>
//         </div>
//     )
//   }
// };

import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from '../../../../auth/authProvider';
import Header from '../../organisms/header';

const SignUp = ({ history }) => {
  const { signup } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    signup(email.value, password.value, history);
  };

  return (
    <div>
      <Header />
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);