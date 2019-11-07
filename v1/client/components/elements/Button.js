import styled, { css } from 'styled-components'

export default styled.button`
font-family: ${(props) => props.theme.font};
font-size: 1.1rem;
font-weight: bold;
box-shadow: 0px 5px 5px #888888;
color: '#db9833';
border: none;
/* width: 1000px;
/* height: 80px; */
width: 400px;
height: 40px; 
text-align: center;
border-radius: 40px;
padding: 10px;
display: block;
max-width: 600px;
margin: auto;
${(props) => props.font && css` background: ${props => props.theme[props.font]};
`}
/* background: ${props => (props.primary ? 'red' : 'green')}; */
${(props) => props.color && css` background: ${props => props.theme[props.color]};
`}
color: #fff;
&:hover {
  background: #f6d8ac;
}
`
