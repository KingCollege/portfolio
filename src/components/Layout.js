import React from 'react';
import styled from 'styled-components';
import NavBar from './navbar/NavBar';

const GridContainer = styled.div`
    position: absolute;
    display: grid;
    grid-template-rows: 50px 1fr 3fr;
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
    width: 100%;
    height: 100%;
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
                </GridHeader>
                <GridBody>{this.props.children}</GridBody>
            </GridContainer>
        );
    }
}

export default Layout;
