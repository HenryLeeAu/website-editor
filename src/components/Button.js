//Define button
import styled from 'styled-components';
import { css } from 'styled-components';
//Green button :<Button Primary className="">Primary</Button>
//Gray button :  <Button Secondary className="">Secondary</Button>
//Pink button :  <Button Warning className="">Warning</Button>
//Outline Style: <Button Primary Outline>Outline</Button>
//Disable <Button Primary className="disable">Primary disable</Button>
//Small button :<Button Primary Small >Primary small</Button>

const Button = styled.button`
  font-size: ${props =>
    props.Small ? '0.75rem' : props.Large ? '1.3rem ' : '1rem '};
  margin:  0;
  padding:  ${props =>
    props.Small ? '0.3rem' : props.Large ? '0.8rem ' : '0.5rem '};
  color:#fff;
  border-radius:${props => (props.Small ? '0.125rem' : '0.25rem ')} ;
  border-width:1px;
  border-style:solid;
 

  ${props =>
    props.disabled &&
    css`
      opacity: 0.4;
    `}
 
  ${props =>
    props.Primary &&
    css`
    background:${props => (props.Outline ? 'transparent' : '#36ddb0')};
    border-color:#36ddb0;
    color:${props => (props.Outline ? '#36ddb0' : '#fff')};
    font-weight:bold;
   
    &:hover{
      background:#2cbb94;
      border-color:#2cbb94;
      ${props =>
        props.disabled &&
        css`
          background: #36ddb0;
          border-color: #36ddb0;
          cursor: default !important;
        `}
      }
      ${props =>
        props.Outline &&
        css`
          ${props =>
            props.disabled &&
            css`
              background: transparent;
              border-color: #36ddb0;
              color: #36ddb0;
            `};
        `}
    }
    ${props =>
      props.Outline &&
      css`
        &:hover {
          color: #fff;
        }
      `}
    &:active{
      background:#36ddb0;
      border-color:#36ddb0;
    }
  `}
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
        ${props =>
          props.disabled &&
          css`
            background: #49555f;
            border-color: #49555f;
            cursor: default !important;
          `} ${props =>
          props.Outline &&
          css`
            color: #fff;
            ${props =>
              props.disabled &&
              css`
                background: transparent;
                border-color: #49555f;
                color: #49555f;
              `};
          `};
      }
      &:active {
        background: #49555f;
        border-color: #49555f;
      }
    `}
  ${props =>
    props.Warning &&
    css`
      background: ${props => (props.Outline ? 'transparent' : '#f8699f')};
      color: ${props => (props.Outline ? '#f8699f' : '#fff')};
      font-weight: bold;
      border-color: #f8699f;
      &:hover {
        background: #eb6497;
        border-color: #eb6497;
        ${props =>
          props.disabled &&
          css`
            background: #f8699f;
            border-color: #f8699f;
            cursor: default !important;
          `} ${props =>
          props.Outline &&
          css`
            ${props =>
              props.disabled &&
              css`
                background: transparent;
                border-color: #f8699f;
                color: #f8699f;
                cursor: default !important;
              `} color:#fff;
          `};
      }
      &:active {
        background: #f8699f;
        border-color: #f8699f;
      }
    `}
  ${props =>
    props.FullWidth &&
    css`
      width: 100%;
    `}

  
`;

export default Button;
