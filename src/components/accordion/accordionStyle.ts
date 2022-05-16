import styled from "styled-components";


export const AccordionHeader = styled('div')`

& {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 300px;
    height: 50px;
    background: red;
    
        
}

`

export const AccordionTitle = styled.h3 `

& {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 32px;
    color: aquamarine;
}
`

export const AccordionInfo = styled.div<{isOpen: boolean}>`

& {
    position: absolute;
    max-height: ${props => props.isOpen ? '400px' :  '0px'};
    opacity: ${props => props.isOpen ? '1' :  '0'};;
    overflow: hidden;
    width: 100%;
    top: 100%;
    background-color: green;
    transition: 0.5s ease-in-out;
    
}

`

export const AccordionInfoText = styled('div')`
width: 100%;
height: 100%;
padding: 20px;
box-sizing: border-box;

`

