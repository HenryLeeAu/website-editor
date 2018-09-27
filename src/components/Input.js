
import styled from 'styled-components';
import { css } from 'styled-components';
const Input = styled.input`
  font-size: 0.875rem;
  margin: 0;
  padding: 0.5rem;
  color:#666666;
  border-style: solid;
  border-width: 1px;
  border-color:#fff;
  width:100%;
  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #ccc;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #ccc;
    opacity:  1;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #ccc;
    opacity:  1;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:    #ccc;
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color:    #ccc;
  }
  &:focus{
     outline:0;
  }
  &.disable{
    opacity:0.4;
  }
  &.warning{
         border-color:#f8699f;
  }
  &.dateDisplay{
    position:relative;
    z-index:100;
    transition: 0.4s;
    &.offline{
      background: #f1f4f5;
      color: #ccc;
         z-index:102;
    }
  }
  ${props =>props.Waring && css `
    background:${props => props.Outline ? 'transparent' : '#f8699f'};
    color:${props => props.Outline ? '#f8699f' : '#fff'};
    font-weight:bold;
    border-color:#f8699f;
    &:hover{
      &.disable{
         background:#f8699f;
         border-color:#f8699f;
      }
      background:#ff70a6;
      border-color:#ff70a6;
      ${props =>props.Outline && css `
        &.disable{
          background:transparent;
          border-color:#f8699f;
          color:#f8699f;
        }
         color:#fff;
      `}
    }
    &:active{
      background:#eb6497;
      border-color:#eb6497;
    }
  `}
  
`


export default Input;
