import React from 'react';
import styled from 'styled-components';
import NavBar from './navbar/NavBar';
import AboutMe from './about_me/AboutMe';
import BackgroundImage from '../assets/Background.jpg';

const GridContainer = styled.div`
    position: absolute;
    display: grid;
    grid-template-rows: 800px 1fr;
    width: 100%;
    height: 100%;
`;

const GridBody = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const GridHeader = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 80px 1fr;
    width: 100%;
    height: 100%;
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-position: center center;
`;

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GridContainer>
                <GridHeader>
                    <NavBar />
                    <AboutMe />
                </GridHeader>
                <GridBody>{this.props.children}</GridBody>
            </GridContainer>
        );
    }
}

export default Layout;
