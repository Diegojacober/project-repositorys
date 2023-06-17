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
    disabled: props.loading,
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

    ${props => props.loading && css`
    svg{
        animation: ${animate} 2s linear infinite;
    }`}
`

export const List = styled.section`

&{

}



` 

export const Repo = styled.article`
  &{
    display: flex;
    justify-content: start;
    align-items: start;
    margin-top: 15px;
    border-radius: 4px;
    padding: 5px 10px;
    box-shadow: 0px 1px 5px rgba(0,0,0, 0.4);
    transition: all ease-in 0.3s;
  }

  &:hover{
    transform: scale(1.03);
    transition: all ease-in 0.3s;
    cursor: pointer;
  }

  & .repo-right{
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & .repo-right img{
      height: 100px;
      width: 100px;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0, 0.3);
  }

  & .repo-right small{
    margin-top: 10px;
    font-size: 10px;
    color:#5e5e5e;
    font-weight: bold;
  }

  & .repo-informations{
    width: 100%;
    padding: 20px 15px;
  }

  & .repo-informations h6{
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  & .repo-informations h6 i{
    font-size: 14px;
  }

  & .repo-informations p{
    display: flex;
    gap: 20px;
    font-size: 13px;
  }

  & .buttons {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .buttons button{
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9c0303;
  }
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