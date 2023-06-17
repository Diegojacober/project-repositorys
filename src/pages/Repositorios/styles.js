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

export const IssuesList = styled.ul`

    &{
        list-style: none;
        margin-top: 30px;
        padding-top: 30px;
        border-top: 1px solid #200;
    }


    & li {
        display: flex;
        padding: 15px 10px;

        & + li {
            margin-top: 12px;
        }

        img{
        width: 70px;
        border-radius: 50%;
        border: 1px solid #0d2636;
        }

        div{
            flex: 1;
            margin-left: 12px;
        }

        p{
            margin-top: 10px;
            font-size: 12px;
            color: #000;
        }

        strong{
            font-size: 15px;
            
            a{
                text-decoration: none;
                color: #222;
                transition: all ease-in-out 0.3s;

                &:hover{
                    color: #0071db;
                }
            }

            span{
                background: #222;
                color: #FFF;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                padding: 4px 7px;
                margin-left: 10px;
            }
        }
    }
`

export const PageActions = styled.div`
    &{
        display: flex;
        align-items: center;
        justify-content: space-between;
    
    
        button{
            outline: 0;
            border: 0;
            background: #222;
            color: #FFF;
            padding: 5px 10px;
            border-radius: 4px;
            
            &:disabled{
                cursor: not-allowed;
                opacity: 0.5;
            }
        }
    }
` 