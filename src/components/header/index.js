import React, { useState } from 'react';
import './styles.scss';

const Header = () => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [members, setMembers] = useState([]);

  return (
    <div className="c-container">
      <div className="container">
        <div className="header-container">
          <span className="input-container">
            <div className="name-text-container">
              <span className="just-text">
                이름 :&nbsp;
              </span>
              <input
                type="text"
                className="name-text-box"
                placeholder="이름을 적어주세요"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="number-text-container">
              <span className="just-text">
                번호 :&nbsp;
              </span>
              <input
                type="text"
                className="number-text-box"
                placeholder="번호를 적어주세요"
                value={userNumber}
                onChange={(e) => {
                  setUserNumber(e.target.value);
                }}
              />
            </div>
          </span>
          <span>
            <button
              className="submit-button"
              onClick={() => {
                const newMembers = members.filter(
                  (element) =>
                    element.name !== userName ||
                    element.number !== userNumber,
                );

                if (members.length === newMembers.length) {
                  setMembers([
                    ...members,
                    {
                      name: userName,
                      number: userNumber,
                    },
                  ]);
                } else {
                  setMembers(newMembers);
                }
              }}
            >
              입력
            </button>
          </span>
        </div>
      </div>
      <div className="body-container">
        {members.map((member, idx) => (
          <div className="mem" key={idx}>
            이름 : {member.name}, 번호 : {member.number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
