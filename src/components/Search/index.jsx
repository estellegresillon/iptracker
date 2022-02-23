import React, { useState } from 'react';
import styled from 'styled-components';

const Search = ({ ip, setIp }) => {
  const [ipValue, setIpValue] = useState('');
  const onClick = () => {
    setIp(ipValue);
  };

  return (
    <Wrapper>
      <h1>IP Address Tracker</h1>
      <InputWrapper>
        <input
          type="text"
          name="firstName"
          value={ipValue}
          onChange={(event) => setIpValue(event.target.value)}
        />
        <button onClick={() => onClick()}>
          <img src="icon-arrow.svg" alt="Search" />
        </button>
      </InputWrapper>
      <TextWrapper>Your IP is displayed by default</TextWrapper>
      <LocationWrapper>
        <div>
          <div className="title">IP ADDRESS</div>
          <div>{ip && ip.ip}</div>
        </div>
        <div>
          <div className="title">LOCATION</div>
          {ip && (
            <div>
              {ip.location.city} {ip.location.region}, {ip.location.country}
            </div>
          )}
        </div>
        <div>
          <div className="title">TIMEZONE</div>
          <div>{ip && ip.location.timezone}</div>
        </div>
        <div>
          <div className="title">ISP</div>
          <div>{ip && ip.isp}</div>
        </div>
      </LocationWrapper>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35vh;
  padding: 30px;
  position: relative;
  background-image: url('/pattern-bg.png');
  background-size: cover;
  background-repeat: no-repeat;

  h1 {
    color: white;
    text-align: center;
  }

  @media (max-width: 900px) {
    height: 500px;
  }
`;

const TextWrapper = styled.div`
  color: white;
  margin-top: 20px;
  font-size: 14px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  margin-top: 20px;

  input,
  button {
    border: none;
    height: 100%;
    outline: none;
    cursor: pointer;
    font-family: 'Montserrat';
  }

  input {
    border-radius: 20px 0px 0px 20px;
    padding: 0 20px;
    color: gray;
    width: 400px;

    @media (max-width: 900px) {
      width: 200px;
    }
  }

  button {
    padding: 0;
    background-color: #404082;
    border-radius: 0px 20px 20px 0px;

    img {
      margin: 0 20px;
    }

    &:hover {
      background-color: #1c1c5b;
    }
  }
`;

const LocationWrapper = styled.div`
  background-color: white;
  display: flex;
  position: absolute;
  top: 300px;
  width: 70%;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  padding: 50px 20px;
  z-index: 1000;

  > div {
    width: calc(25% - 70px);
    padding: 0 30px 0 40px;
    border-left: 1px solid lightgray;
    color: #333333;
    font-size: 20px;
    font-weight: bolder;
    word-break: break-word;

    .title {
      color: lightgray;
      font-size: 14px;
      margin-bottom: 20px;
      letter-spacing: 2px;

      @media (max-width: 900px) {
        margin-bottom: 10px;
      }
    }

    @media (max-width: 900px) {
      flex-direction: column;
      width: 100%;
      border-left: none;
      border-top: 1px solid lightgray;
      padding: 20px 0;
    }
  }

  > div:first-child {
    padding-top: 0;
    border-left: none;
    border-top: none;
  }

  > div:last-child {
    padding-bottom: 0;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 35px;
    top: 300px;
  }
`;
