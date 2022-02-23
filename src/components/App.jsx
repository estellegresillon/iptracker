import React, { useState } from 'react';
import useFetch from 'react-fetch-hook';
import styled from 'styled-components';

import Search from 'components/Search';
import Map from 'components/Map';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  @media (max-width: 900px) {
    height: auto;
  }
`;

const App = () => {
  const [searchedIp, setSearchedIp] = useState('');
  const { data, error } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_JDX5YHdF35IFpBLTsC0gi5ujD985H&ipAddress=${searchedIp}`,
    [searchedIp],
  );

  if (error) return <p>An error occured !</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <Wrapper>
      <Search ip={data} setIp={setSearchedIp} />
      <Map ip={data} />
    </Wrapper>
  );
};

export default App;
