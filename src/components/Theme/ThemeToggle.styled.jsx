import styled from "styled-components";

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const ToggleWrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 50px;
  height: 26px;
  cursor: pointer;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d1d1d1;
  border-radius: 34px;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
  ${ToggleInput}:checked + & {
    background-color: #ffb366;
  }
  ${ToggleInput}:checked + &:before {
    transform: translateX(24px) translateY(-50%);
  }
`;
