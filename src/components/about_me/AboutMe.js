import React from 'react';
import styled from 'styled-components';
import design_preset from '../design_presets/presets.json';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
`;

const AboutMeContainer = styled.div`
    height: auto;
    width: 700px;
    margin: auto;
`;

const Welcome = styled.p`
    position: relative;
    color: ${design_preset['general-colors'].white};
    font-size: 2rem;
    font-weight: bold;
`;

const Description = styled.p`
    color: ${design_preset['general-colors'].white};
    font-size: 1rem;
`;

const DownloadButton = styled.button`
    background: transparent;
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;

    padding: 10px;
    padding-left: 25px;
    padding-right: 25px;
    border: 2px solid white;
    color: ${design_preset['general-colors'].blue};
    border-radius: 15px;
    font-weight: bold;
    &:active {
        outline: none;
    }

    &:hover {
        background: white;
        color: black;
    }

    &:focus {
        outline: 0;
    }
`;

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <AboutMeContainer>
                    <Welcome>Welcome</Welcome>
                    <Description>
                        Ut volutpat, nunc at efficitur hendrerit, ipsum enim tincidunt metus, a hendrerit magna nisi et tellus. 
                        Pellentesque malesuada turpis non nisi sodales mattis et ut tortor. Aliquam luctus dolor eu nibh convallis, 
                        eget pulvinar quam tincidunt. Quisque nec urna et diam pretium pellentesque ac et nulla. Phasellus mauris justo, 
                        aliquet sed diam at, viverra ullamcorper purus. 
                    </Description>
                    <DownloadButton>DOWNLOAD CV</DownloadButton>
                </AboutMeContainer>
            </Container>
        );
    }
}

export default AboutMe;
