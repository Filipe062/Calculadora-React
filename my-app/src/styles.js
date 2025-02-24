import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* Corrected the typo here */
  background-color: rgb(247, 181, 225);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
   background-color: rgb(161, 101, 153);
   width: 50%; /* Added missing semicolon */
   
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column; /* Fixed the case here */
  justify-content: space-between;
  align-items: center;
`;
