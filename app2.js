import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      signingUp: false,
      searchQuery: '',
      activeSection: 'home', 
      username: '',
      password: '',
      signupUsername: '',
      signupPassword: '',
      confirmPassword: '',
      name: '',
      birthdate: '',
      phone: '',
      address: '',
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      loggedIn: !prevState.loggedIn,
    }));
  };

  login = (e) => {
    e.preventDefault();
  
    const { username, password } = this.state;
  
    if (username === 'username' && password === 'password') {
      this.setState({
        loggedIn: true,
      });
    } else {
      // 로그인 실패 시 회원가입 화면으로 전환
      this.setState({
        loggedIn: false,
        signingUp: true,
      });
    }
  };
  

  toggleSignup = () => {
    this.setState((prevState) => ({
      signingUp: !prevState.signingUp,
    }));
  };

  register = (e) => {
    e.preventDefault();
    this.setState({
      signingUp: false,
    });
  };

  navigateTo = (section) => {
    if (section === 'login' || section === 'signup') {
      this.setState({
        activeSection: section,
      });
    } else {
      this.setState({
        activeSection: section,
        loggedIn: false, 
      });
    }
  };

  performSearch = (e) => {
    e.preventDefault();
  };

  render() {
    const { loggedIn, signingUp, activeSection } = this.state;

    return (
      <div>
        <ul className="navbar" style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Gothic', fontSize: '20px' }}>
          <li style={{ listStyleType: 'none', marginRight: '50px' }}>
            <div className="nav-item-box">
              <a href="#home" onClick={() => this.navigateTo('home')} style={{ color: 'black' }}>
                홈
              </a>
            </div>
          </li>
          <li style={{ listStyleType: 'none', marginRight: '50px' }}>
            <div className="nav-item-box">
              <a href="#findfriend" onClick={() => this.navigateTo('findfriend')} style={{ color: 'black' }}>
                여행메이트찾기
              </a>
            </div>
          </li>
          <li style={{ listStyleType: 'none', marginRight: '50px' }}>
            <div className="nav-item-box">
              <a
                href="#my"
                onClick={() => this.navigateTo(loggedIn ? 'home' : 'login')}
                style={{ color: 'black' }}
              >
                MY
              </a>
            </div>
          </li>
        </ul>

        <hr style={{ backgroundColor: 'black', height: '1px', border: 'none' }} />

        {activeSection === 'home' && (
          <div>

          </div>
        )}

        {activeSection === 'findfriend' && (
          <div>

          </div>
        )}

        {activeSection === 'mypage' && (
          <div>

          </div>
        )}

        <div id="loginScreen" style={{ display: this.state.loggedIn ? 'none' : 'block' }}>
          <h2>로그인</h2>
          <form onSubmit={this.login} className="login-signup-form">

        {!loggedIn && !signingUp && activeSection === 'login' && (
          <div>
            <p>로그인에 실패하였습니다. 회원가입을 진행하시겠습니까?</p>
          </div>
        )}
            <label htmlFor="username">이메일:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <br />
            <br />

            <label htmlFor="password">비밀번호:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br />
            <br />

            <button type="submit">로그인</button>
          </form>
        </div>

        {/* 로그인 완료 메시지 */}
        {loggedIn && !signingUp && (
          <div className="message">
            <p>로그인 완료</p>
          </div>
        )}

        {/* 로그인 실패 메시지 */}
        {!loggedIn && !signingUp && activeSection === 'login' && (
          <div>
            <p>아이디/비밀번호가 틀립니다. 다시 로그인해주세요.</p>
          </div>
        )}

        {/* 회원가입 화면 */}
        <div id="signupScreen" style={{ display: signingUp ? 'block' : 'none' }}>
          <h2>회원가입</h2>
          <form onSubmit={this.register} className="login-signup-form">
            <label htmlFor="signupUsername">아이디:</label>
            <input
              type="text"
              id="signupUsername"
              name="signupUsername"
              required
              onChange={(e) => this.setState({ signupUsername: e.target.value })}
            />
            <br />
            <br />

            <label htmlFor="signupPassword">비밀번호:</label>
            <input
              type="password"
              id="signupPassword"
              name="signupPassword"
              required
              onChange={(e) => this.setState({ signupPassword: e.target.value })}
            />
            <br />
            <br />

            <label htmlFor="confirmPassword">비밀번호 재확인:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              onChange={(e) => this.setState({ confirmPassword: e.target.value })}
            />
            <br />
            <br />

            <label htmlFor="name">이름:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <br />
            <br />

            <label htmlFor="birthdate">생년월일:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              required
              onChange={(e) => this.setState({ birthdate: e.target.value })}
            />
            <br />
            <br />

            <label htmlFor="phone">전화번호:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
            <br />
            <br />

            <label htmlFor="address">주소:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              onChange={(e) => this.setState({ address: e.target.value })}
            />
            <br />
            <br />

            <button type="submit">회원가입</button>
          </form>
        </div>

        {/* 회원가입 완료 메시지 */}
        {signingUp && !loggedIn && (
          <div className="message">
            <p>회원가입이 완료되었습니다.</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
