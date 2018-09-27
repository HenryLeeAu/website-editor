//Define button
import styled from 'styled-components'
import { css } from 'styled-components'
//Green button :<Button Primary className="">Primary</Button>
//Gray button :  <Button Secondary className="">Secondary</Button>
//Pink button :  <Button Warning className="">Warning</Button>
//Outline Style: <Button Primary Outline>Outline</Button>
//Disable <Button Primary className="disable">Primary disable</Button>
//Small button :<Button Primary Small >Primary small</Button>

const PanelClose = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1.1rem;
  width: 1.8rem;
  height:1.8rem;
  border: 0;
  background: none;
  opacity: 0.4;
  img{
    width:100%;
    height: 100%;
  }
  &:hover{
    opacity: 1;
  }
`


export default PanelClose;
