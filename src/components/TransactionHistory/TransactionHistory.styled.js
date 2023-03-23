import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  margin-top: 300px;
  margin-left:15px;
  
`;

export const TrHead = styled.tr`
  background-color: blue;
  color: #ffffff;
`;

export const Th = styled.th`
  width: calc(1200px / 3);
  font-size: 35px;
  font-weight: 500;
  padding: 15px;
  border: 1px solid gray;
  &:last-child {
    border-right: 0;
  }
`;

export const TrBody = styled.tr`
  &:nth-of-type(2n) {
    background-color: grey;
  }
`;

export const Td = styled.td`
  text-transform: capitalize;
  text-align: center;
  font-size: 15x;
  font-weight: 400;
  padding: 20px;
  border: 1px solid #dedede;
`;