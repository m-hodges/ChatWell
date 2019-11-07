import styled, { css } from 'styled-components'

export default styled.h1`
background-image: url('/images/images8.jpg');
font-family: 'Liu Jian Mao Cao', cursive;
font-size: 5.3rem;
border: none;
border-radius: none;
padding:21px;
font-weight:lighter;
  text-align:center;
  display:block;
  margin:0px;
  opacity: 5px;
  /* background-color:#f6d8ac; */
/* background: ${props => (props.primary ? 'red' : 'green')}; */
${(props) => props.color && css` background: ${props => props.theme[props.color]};
`}
`
