import React from 'react';
import styled from 'styled-components';

const Loader = ({ size }) => {
  return (
    <StyledWrapper>
      <div className="loader" style={{ width: size, height: size }} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
  border: 4px solid rgba(29,161,242, 1);
  border-left-color: transparent;
  border-radius: 50%;
  animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}`;

export default Loader;
