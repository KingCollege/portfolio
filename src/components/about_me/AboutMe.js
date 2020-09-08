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
                        ...I am a recent graduate with a Computer Science degree. I am passionate about anything related
                        to programming and problem solving. To learn more about me please visit my GitHub page, LinkedIn
                        or have a look at some of projects ._
                    </Description>
                </AboutMeContainer>
                <DownloadButton>DOWNLOAD CV</DownloadButton>
            </Container>
        );
    }
}

export default AboutMe;
