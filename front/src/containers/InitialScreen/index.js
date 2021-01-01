import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {routes} from "../Router/";
import styled from "styled-components";
import HeaderComponent from "../../components/HeaderComponent";


export const Body = styled.div`
    border-color:#f7653b;
    background-color: #f7653b !important;
    line-height: 18px;
    font-size: 13px;
    color: hsl(0,0%,30%);

    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

    margin: 0;
    padding: 0;

    display: block;
`;

function InitialScreen(props){
    return( 
        <Body>
            <HeaderComponent></HeaderComponent>
        </Body>
       
    )
}


export const mapDispatchToProps = (dispatch) =>({
     goToLoginPage: () => dispatch(push(routes.loginPage))
 })

export default connect(null, mapDispatchToProps)(InitialScreen)
