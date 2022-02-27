import React from 'react';
import styled from 'styled-components';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Wrapper = styled.div`
  height: 65vh;

  @media (max-width: 900px) {
    height: 500px;
  }
`;

const Map = ({ ip }) => {
  if (!ip) {
    return null;
  }

  const coordinates = [ip.location.lat, ip.location.lng];

  return (
    <Wrapper>
      <MapContainer
        style={{ height: '100%' }}
        center={coordinates}
        zoom={14}
        scrollWheelZoom={false}
        key={ip?.location.lat || 'initial-map'}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.REACT_APP_TILES_API}`}
        />
        <Marker position={coordinates}></Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default Map;
