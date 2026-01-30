import React, { useState, useEffect } from 'react';

const LoginPage = ({ onLoginSuccess }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captcha);
  };

  const chkLogin = () => {
    if (!loginId) {
      alert('Please enter usename');
      document.getElementById('txtLoginId').focus();
      return;
    }
    if (!password) {
      alert('Please enter password');
      document.getElementById('txtPassword').focus();
      return;
    }
    if (!captchaInput) {
      alert('Please enter captcha');
      document.getElementById('txtCaptcha').focus();
      return;
    }

    if (captchaInput !== generatedCaptcha) {
      alert('Please valid captcha');
      setCaptchaInput('');
      document.getElementById('txtCaptcha').focus();
      return;
    }

    // Mock Authentication Logic
    const normalUser = loginId.trim().toUpperCase();
    const normalPass = password.trim();

    if (normalUser === '727624BSC046' && normalPass === '30-04-2007') {
      onLoginSuccess({
        name: 'NAVEEN P',
        roll: '727624BSC046',
        photo: 'https://cms.nia.ac.in/CMSAPP/api/User/Account/Photo/110805?v=0.9530980101260992'
      });
    } else if (normalUser === '727624BSC011' && normalPass === '25-06-2007') {
      onLoginSuccess({
        name: 'DHANUSH S',
        roll: '727624BSC011',
        photo: 'https://cms.nia.ac.in/CMSAPP/api/User/Account/Photo/110769?v=0.9480332412541949'
      });
    } else {
      alert('Invalid Login ID or Password. Please retry...');
      generateCaptcha();
      setPassword('');
      setCaptchaInput('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay"></div>

      <div className="login-box noselect">
        <div className="login-logo"></div>

        <div style={{ marginBottom: '15px' }}>
          <label>Login ID :</label>
          <input
            type="text"
            id="txtLoginId"
            className="login-field"
            maxLength="20"
            placeholder="Your Reg. Number"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password :</label>
          <input
            type="password"
            id="txtPassword"
            className="login-field"
            placeholder="dd-mm-yyyy"
            maxLength="20"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          className="captcha-display"
          onClick={generateCaptcha}
          title="Click to refresh captcha"
        >
          {generatedCaptcha}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: 'brown' }}>Enter Captcha :</label>
          <input
            type="text"
            id="txtCaptcha"
            className="login-field"
            maxLength="6"
            style={{ userSelect: 'all' }}
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={chkLogin}>
          Submit
        </button>

        <div style={{ marginTop: '20px', fontSize: '0.8em', color: 'black' }}>
          Copyright © COXCO<br />All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
