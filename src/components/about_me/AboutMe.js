import React from 'react';
import styled from 'styled-components';
import design_preset from '../design_presets/presets.json';

const TitleBackground = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${design_preset['title-container'].background};
    opacity: ${design_preset['title-container'].opacity}%;
    z-index: -1;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    margin-top: 20px;
    width: 100%;
    height: 100%;
`;

const ContainerContent = styled.div`
    display: grid;
    width: 100%;
    height: 90%;
    margin: auto;
    margin-left: -100%;
    grid-template-columns: 2fr 1fr;
`;

const AboutMeContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 40px;
`;

const Name = styled.p`
    color: ${design_preset['general-colors'].orange};
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 0;
`;

const Occupation = styled.p`
    color: ${design_preset['general-colors'].grey};
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 10px;
`;

const Description = styled.p`
    color: ${design_preset['general-colors'].grey};
    font-size: 15px;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Contact = styled.p`
    color: ${design_preset['general-colors'].grey};
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
`;

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <TitleBackground />
                <ContainerContent>
                    <AboutMeContainer>
                        <Name>MANDU SHI</Name>
                        <Occupation>Software Developer</Occupation>
                        <Description>
                            ...I am a recent graduate with a Computer Science degree. I am passionate about anything
                            related to programming and problem solving. To learn more about me feel free to contact me,
                            or have a look at some of my projects. You can also find me on Github and LinkedIn.
                        </Description>
                        <Contact>
                            <strong>email</strong>: mandushi.18@gmail.com
                        </Contact>
                        <Contact>
                            <strong>phone</strong>: 07716045270
                        </Contact>
                    </AboutMeContainer>
                </ContainerContent>
            </Container>
        );
    }
}

export default AboutMe;
