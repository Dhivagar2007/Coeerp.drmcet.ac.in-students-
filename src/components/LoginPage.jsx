import React, { useState, useEffect } from 'react';

const LoginPage = ({ onLoginSuccess }) => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  // Use 'p0sTn9' as the default captcha to match the visual, 
  // but keep the generator capability for functionality if needed. 
  // For exact clone visual we start with a static one, or we can random it.
  // The provided HTML has "VZCGfX" and "p0sTn9" in different places, 
  // I will use a random one to be functional but style it effectively.
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    // Logic to mimic the random string generation
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captcha);
  };

  const chkLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

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
      alert('Please valid captcha'); // Exact text from target JS
      setCaptchaInput('');
      document.getElementById('txtCaptcha').focus();
      return;
    }

    // Mock Authentication Logic mimicking the AJAX success/failure
    // In the real script it calls chklogin.php
    const normalUser = loginId.trim().toUpperCase();
    const normalPass = password.trim();

    // Hardcoded mock credentials for demo
    if ((normalUser === '727624BSC046' && normalPass === '30-04-2007') ||
      (normalUser === '727624BSC011' && normalPass === '25-06-2007')) {
      // Simulate "SUCCESS" response
      onLoginSuccess({
        name: normalUser === '727624BSC046' ? 'NAVEEN P' : 'DHANUSH S',
        roll: normalUser,
        photo: '' // Placeholder
      });
    } else {
      // Simulate failure response
      alert('Invalid Login ID or Password. Please retry...');
      generateCaptcha();
      setPassword('');
      setCaptchaInput('');
    }
  };

  return (
    <div className="bg-wrap">
      <div className="content" style={{ padding: '10px' }}>
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            backgroundImage: "url('images/entity/entitylogo.jpg')", // Placeholder path
            backgroundSize: '200px 100px',
            backgroundRepeat: 'no-repeat',
            border: '1px solid white',
            borderRadius: '10px',
            width: '200px',
            height: '100px',
            display: 'block',
            marginLeft: '100px',
            marginTop: '-50px',
            paddingRight: '0px'
          }}
        ></div>

        <br /><br /><br /><br /><br /><br /><br /><br />

        <form onSubmit={chkLogin}>
          Login ID :<br />
          <input
            type="text"
            id="txtLoginId"
            maxLength="20"
            placeholder="Your Reg. Number"
            style={{ fontSize: '1em' }}
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          /><br /><br />

          Password :<br />
          <input
            type="password"
            id="txtPassword"
            placeholder="dd-mm-yyyy"
            maxLength="20"
            style={{ fontSize: '1em' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />

          <div
            className="noselect"
            style={{
              height: '2em',
              lineHeight: '2em',
              width: '60%',
              margin: 'auto',
              fontSize: '2em',
              backgroundColor: 'brown',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            onClick={generateCaptcha}
            title="Click to refresh captcha"
          >
            {generatedCaptcha}
          </div><br />

          <span style={{ color: 'brown' }}>Enter Captcha :</span><br />
          <input
            type="text"
            id="txtCaptcha"
            maxLength="6"
            style={{ fontSize: '1em', userSelect: 'all' }}
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          />
          <br /><br />

          <input
            type="submit"
            value="Submit"
            style={{ fontSize: '1em', width: '100px', height: '30px' }}
          />
        </form>

        <br /><br />
        <span className="noselect" style={{ fontSize: '0.8em', color: 'black' }}>
          Copyright © COXCO<br />All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
