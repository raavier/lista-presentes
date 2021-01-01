import React from 'react';
import styled from "styled-components";


export const ContainerBar = styled.div`
    position: absolute;
    height: 48px;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10001;
    overflow: visible;
    user-select: none;
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const Col3 = styled.div`
    width:25%;
    align-items: center;
    display: flex;
    box-sizing: border-box;
`;
export const Col6 = styled.div`
    width:50%;
    justify-content: center;
    align-items: center;
    display: flex;
    box-sizing: border-box;
`;

export const TextHeader01 = styled.div`
    text-align:left;
    font-weight:bold;
    font-size:1rem;
    color:white;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;
`;
export const TextHeader02 = styled.div`
    text-align:left;
    font-weight:bold;
    font-size:1.5rem;
    color:white;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol',sans-serif;
`;

export function HeaderComponent() {
    return (
        <ContainerBar>
            <Col3><TextHeader01>Stefânia e Flávio - 24.06.2021</TextHeader01></Col3>
            <Col6><TextHeader02>Lista de Presentes</TextHeader02></Col6>
        </ContainerBar>
    );
  }
  
  export default HeaderComponent;
  