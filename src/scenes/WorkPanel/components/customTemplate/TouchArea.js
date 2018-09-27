import styled from 'styled-components';
import { css } from 'styled-components';
const TouchArea = styled.button`
  opacity: 0;
  border: 2px solid #03a9f4;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border-width: 2px;
  border-color: rgb(26, 138, 201);
  border-style: dashed;
  z-index: 10000;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }

  ${props =>
    props.Secondary &&
    css`
      background: ${props => (props.Outline ? 'transparent' : '#49555f')};
      color: ${props => (props.Outline ? '#49555f' : '#fff')};
      font-weight: bold;
      border-color: #49555f;
      &:hover {
        background: #414b54;
        border-color: #414b54;
        &.disable {
          background: #49555f;
          border-color: #49555f;
        }
        ${props =>
          props.Outline &&
          css`
            &.disable {
              background: transparent;
              border-color: #49555f;
              color: #49555f;
            }
            color: #fff;
          `};
      }
      &:active {
        background: #49555f;
        border-color: #49555f;
      }
    `};
`;

export default TouchArea;
