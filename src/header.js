import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      signingUp: false,
      searchQuery: '',
      activeSection: 'home',
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      loggedIn: !prevState.loggedIn,
    }));
  };

  login = () => {
    // 로그인 로직을 여기에 구현하세요.
    const { username, password } = this.state; // 입력된 사용자 이름과 비밀번호 가져오기

    if (username === 'dkdlel' && password === 'qlalfqjsgh') {
      // 로그인 성공
      this.setState({
        loggedIn: true,
      });
    } else {
      // 로그인 실패
      this.setState({
        loggedIn: false,
      });
    }
  };

  toggleSignup = () => {
    this.setState((prevState) => ({
      signingUp: !prevState.signingUp,
    }));
  };

  register = () => {
    // 회원가입 로직을 여기에 구현하세요.
    // 회원가입이 완료되면 signingUp 상태를 false로 설정하세요.
    this.setState({
      signingUp: false,
    });
  };

  navigateTo = (sectionId) => {
    this.setState({
      activeSection: sectionId,
    });
  };

  performSearch = () => {
    // 검색 로직을 여기에 구현하세요.
    // 검색 결과에 따라 화면을 업데이트할 수 있습니다.
  };

  render() {
    const { loggedIn, signingUp, activeSection } = this.state;

    return (
      <div>
        {/* 네비게이션 바 */}
        <ul className="navbar">
          <li>
            <a href="#signup" onClick={this.toggleSignup}>
              회원가입
            </a>
          </li>
          <li>
            <a href="#" onClick={this.toggleLogin}>
              {loggedIn ? '로그아웃' : '로그인'}
            </a>
          </li>
          <li id="searchContainer" style={{ display: 'under' }}>
            <form onSubmit={this.performSearch} id="searchForm">
              <input
                type="text"
                id="searchBox"
                placeholder="검색어를 입력하세요"
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
              <button type="submit">검색</button>
            </form>
          </li>
          <li style={{ float: 'none', display: 'inline-block' }}>
            <div className="nav-item-box">
              <a href="#home" onClick={() => this.navigateTo('home')}>
                홈
              </a>
            </div>
          </li>
          <li style={{ float: 'none', display: 'inline-block' }}>
            <div className="nav-item-box">
              <a href="#findfriend" onClick={() => this.navigateTo('findfriend')}>
                여행메이트찾기
              </a>
            </div>
          </li>
          <li style={{ float: 'none', display: 'inline-block' }}>
            <div className="nav-item-box">
              <a href="#mypage" onClick={() => this.navigateTo('mypage')}>
                MY
              </a>
            </div>
          </li>
        </ul>

        {/* 로그인 화면 */}
        <div id="loginScreen" style={{ display: loggedIn ? 'none' : 'block' }}>
          <h2>로그인</h2>
          <form action="login.php" method="post" onSubmit={this.login} className="login-signup-form">
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
        {loggedIn && (
          <div className="message">
            <p>로그인 완료</p>
          </div>
        )}

        {/* 로그인 실패 메시지 */}
        {!loggedIn && (
          <div className="message" style={{ display: signingUp ? 'none' : 'block', color: 'red' }}>
            <p>아이디/비밀번호가 틀립니다. 다시 로그인해주세요.</p>
          </div>
        )}

        {/* 회원가입 화면 */}
        <div id="signupScreen" style={{ display: signingUp ? 'block' : 'none' }}>
          <h2>회원가입</h2>
          <form action="register.php" method="post" onSubmit={this.register} className="login-signup-form">
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
        {signingUp && (
          <div className="message">
            <p>회원가입이 완료되었습니다.</p>
          </div>
        )}

        {/* 페이지 섹션 */}
        <div id="mypage" style={{ display: activeSection === 'mypage' ? 'block' : 'none' }}>
          {/* 마이페이지 내용 */}
        </div>

        <div id="findfriend" style={{ display: activeSection === 'findfriend' ? 'block' : 'none' }}>
          {/* 여행메이트 찾기 내용 */}
        </div>

        <div id="home" style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
          {/* 홈 내용 */}
        </div>
      </div>
    );
  }
}

export default App;
