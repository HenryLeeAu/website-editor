import styled from 'styled-components';
import { css } from 'styled-components';
import IconSuccess from '../../../media/success.svg';
import IconFailed from '../../../media/failed.svg';
import Loading from '../../../media/loading-header.gif';
const ProjectStatusBadge = styled.span`
  font-size: 14px;
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.1rem 1.4rem 0.1rem 0.5rem;
  display: inline-block;
  user-select: none;
  cursor: context-menu;
  color: ${props => (props.Failed ? '#f8699f' : '#36ddb0 ')};
  &::before {
    content: ' ';
    display: block;
    background: none;
    ${props =>
      props.Success &&
      css`
        background: rgba(54, 221, 176, 0.6);
      `} ${props =>
      props.Failed &&
      css`
        background: rgba(248, 105, 159, 0.6);
      `} 
    width:1.125rem;
    height: 1.125rem;
    position: absolute;
    border-radius: 50%;
    right: 0;
    top: 3px;
  }
  &::after {
    content: ' ';
    display: block;

    position: absolute;
    background-size: 27px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url(${Loading});
    width: 0.9rem;
    height: 0.9rem;
    right: 0.1rem;
    top: 0.3125rem;
    ${props =>
      props.Success &&
      css`
        width: 0.9rem;
        height: 0.9rem;
        right: 0.1rem;
        top: 0.3125rem;
        background-size: auto;
        background-image: url(${IconSuccess});
      `} ${props =>
      props.Failed &&
      css`
        width: 0.65rem;
        height: 0.65rem;
        right: 0.275rem;
        top: 0.4125rem;
        background-size: auto;
        background-image: url(${IconFailed});
      `};
  }
`;

export default ProjectStatusBadge;
