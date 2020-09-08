import React from 'react';
import styled from 'styled-components';
import NavBar from './navbar/NavBar';
import AboutMe from './about_me/AboutMe';
import BackgroundImage from '../assets/Background.jpg';

const GridContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
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
`;

const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -3;
`;

const Image = styled.img`
    width: 100%;
`;

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <GridContainer>
                <ImageContainer>
                    <Image src={BackgroundImage} />
                </ImageContainer>

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
