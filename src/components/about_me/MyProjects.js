import React from 'react';
import styled from 'styled-components';
import design_preset from '../design_presets/presets.json';

const Container = styled.div`
    display: grid;
    grid-template-rows: 200px 1fr;
    width: 100%;
    height: 100%;
`;

const ProjectsHeader = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    width: 100%;
    height: 100%;
`;

const Title = styled.p`
    margin-left: 150px;
    margin-bottom: 15px;
    position: relative;
    color: ${design_preset['general-colors'].grey};
    font-size: 1.5rem;
    font-weight: bold;
`;

const FilterContainer = styled.div`
    margin-left: 150px;
    display: flex;
    justify-content: flex-start;
    width: auto;
    height: 40px;
`;

const FilterButton = styled.button`
    background: transparent;
    padding: 10px;
    padding-left: 25px;
    padding-right: 25px;
    color: ${design_preset['general-colors'].grey};
    border-radius: 15px;
    border: 2px solid ${design_preset['general-colors'].grey};
    font-weight: bold;
    margin: 0;
    margin-right: 15px;
    &:active {
        outline: none;
    }

    &:hover {
        color: ${design_preset['general-colors'].blue};
    }

    &:focus {
        background: ${design_preset['general-colors'].grey};
        color: ${design_preset['general-colors'].white};
        outline: 0;
    }
`;

const ProjectsBody = styled.div``;

class MyProjects extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <ProjectsHeader>
                    <Title>MY PROJECTS ._</Title>
                    <FilterContainer>
                        <FilterButton>JAVA</FilterButton>
                        <FilterButton>JAVASCRIPT</FilterButton>
                    </FilterContainer>
                </ProjectsHeader>
                <ProjectsBody></ProjectsBody>
            </Container>
        );
    }
}

export default MyProjects;
