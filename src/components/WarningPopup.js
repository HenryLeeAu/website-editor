//Define button
import styled , { keyframes } from 'styled-components'
import { css } from 'styled-components'

const rotate360 = keyframes`
from {
  opacity:0;
  
}

to {
  opacity:100%;

}
`;
const WarningPopup = styled.div`
animation: ${rotate360} 0.3s ease-in-out 1;
position: absolute;
background: #f8699f;
width:80%;
right: 10%;
color: #fff;
bottom: 78px;
padding: 1rem;
box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;  

  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(248, 105, 159, 0);
    border-top-color: #f8699f;
    border-width: 10px;
    margin-left: -10px;
  }
   
  

  
`


export default WarningPopup;
