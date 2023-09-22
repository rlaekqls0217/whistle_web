import React, { useState } from 'react';
import './home.css';
import '../../fonts/font.css';

function Home() {
  const [clicked, setClicked] = useState([]);

  const handleButtonClick = (index) => {
    const updatedClicked = [...clicked];
    updatedClicked[index] = !updatedClicked[index];
    setClicked(updatedClicked);
  }

  const buttonContents = [
    '서울특별시',
    '부산광역시',
    '대구광역시',
    '인천광역시',
    '광주광역시',
    '울산광역시',
    '대전광역시',
    '세종특별자치시',
    '경기도',
    '강원특별자치도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
    '제주특별자치도'
  ];

  return (
    <div className="container">
      <div className="boxTitle1">광역시도</div>
      <div className="box1">
        {buttonContents.map((content, index) => (
          <div className="buttonContainer" key={index}>
            <button
              className={`button ${clicked[index] ? 'clicked' : ''}`}
              onClick={() => handleButtonClick(index)}
              style={{ color: clicked[index] ? 'blue' : 'black' }}
            >
              {content}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;