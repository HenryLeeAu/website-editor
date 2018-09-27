
import styled from 'styled-components';
import { css } from 'styled-components';
const ProjectStatusBadge = styled.span`
  font-size:12px;
  color:#fff;
  padding:0.1rem 0.5rem;
  margin:0 0.2rem;
  display:inline-block;
  user-select: none;
  cursor:context-menu;
  ${props =>props.Draft && css `
    background:rgba(147,150,157,0.6);
  `}
   ${props =>props.Live && css `
    background:rgba(54,221,176,0.6);
  `}
   ${props =>props.Expired && css `
   background:rgba(147,150,157,0.6);
  `}
  ${props =>props.Pause && css `
     background:rgba(147,150,157,0.6);
  `}

`
export default ProjectStatusBadge;
