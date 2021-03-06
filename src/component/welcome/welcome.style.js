import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: block;
`;

export const commonTitle = css`
  text-align: center;
  color: #707070;
  font-weight: 500;
`;

export const Name = styled.div`
  ${ commonTitle }
  font-size: 48px;
`;

export const JobName = styled.div`
  ${ commonTitle }
  font-size: 36px;
`;

export const DescriptionTitle = styled.div`
  color: #808080;
  font-size: 22px;
`;

export const Description = styled.div`
  color: #707070;
  font-size: 14px;
`;

export const Button = styled.button`
  color: white;
  background-color: #1875F0;
  border-radius: 24px;
  height: 40px;
  border: 0;
`;
