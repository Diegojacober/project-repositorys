import { styled, keyframes, css } from "styled-components";

export const Container = styled.div`
max-width: 700px;
background-color: #FFF;
border-radius: 4px;
display: flex;
box-shadow: 0 0 20px rgba(0,0,0, 0.2);
margin: 80px auto;
padding: 30px;
display: flex;
flex-direction: column;

h1{
    font-size: 20px;
    display: flex;
    align-items: center;

    svg{
        margin-right: 10px;
    }
}
`;

export const Form = styled.form`
margin-top: 30px;
display: flex;

input{
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
}
`
// Criando animação

const animate = keyframes`
    from{
        transform: rotate(0deg);
    } to{
        transform: rotate(360deg);
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type:'submit',
    disabled: props.Loading,
    }))`
    background-color: #0d2636;
    border: 0;
    border-radius: 4px;
    padding: 0 15px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.Loading && css`
    svg{
        animation: ${animate} 2s linear infinite;
    }`}
`

export const Loader = styled.span`
& {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background-color: #0d2636;
  padding: 10px 15px;
  border-radius: 4px;
  
}
&::after,
&::before {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 15px;
  animation: animloader 2s linear infinite;
}
&::after {
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
` 