import styled from 'styled-components';

const PanelEditOptionButton = styled.button`
  border: 0;
  background: 0;
  position: relative;
  width: 55px;
  text-align: right;
  &:before {
    position: absolute;
    content: ' ';
    width: 0;
    height: 0;
    border-style: solid;
    left: 0px;
    top: 5px;
  }
  &.arrowUp::before {
    border-width: 0 5px 7px 5px;
    border-color: transparent transparent #6b6b6b transparent;
  }
  &.arrowDown::before {
    border-width: 7px 5px 0 5px;
    border-color: #6b6b6b transparent transparent transparent;
  }
`;

export default PanelEditOptionButton;
