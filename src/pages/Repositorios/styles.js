import { Link } from "react-router-dom";
import { styled } from "styled-components";


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

export const Loader = styled.div`

&{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
}

& span {
  width: 48px;
  height: 48px;
  border-width: 3px;
  border-style: dashed solid  solid dotted;
  border-color: #0d2636 #0d2636 transparent #0d2636;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
& span::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  top: 31px;
  border: 10px solid transparent;
  border-right-color: #0d2636;
  transform: rotate(-40deg);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} `

export const Owner = styled.header`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & img{
        width: 150px;
        border-radius: 20%;
        margin: 20px 0;
    }

    & h1{
        font-size: 30px;
        color: #0d2636;
    }

    & p {
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`

export const BackButton = styled(Link)`
    &{
        width: auto;
        border: 0;
        background: transparent;
        padding: 5px 20px;
    }
`