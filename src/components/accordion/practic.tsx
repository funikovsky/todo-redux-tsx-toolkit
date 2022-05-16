import { FC, ReactNode } from "react"
import styled, {keyframes} from "styled-components"

const rotateAnimation = keyframes`
    0% {

        transform: rotateZ(0deg);

    }
    100% {
        transform: rotateZ(360deg);

    }
`


const PracticStyle = styled.div<{color:string}>`
color: ${props => props.color};
font-size: 30px;
text-align: center;
background-color: antiquewhite;
&:hover {
    animation: ${rotateAnimation} 1s infinite linear;
}

`

interface PracticProps {
    children: ReactNode;
    color: string
}

export const Practic: FC<PracticProps> = (props) => {
    
    
    return  <PracticStyle { ...props}/>

               
     
           
}