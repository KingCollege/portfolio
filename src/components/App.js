import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`;

const GridContainer = styled.div`
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 15fr;
    width: 100%;
    height: 100%;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <GridContainer className="App">Welcome to my portfolio</GridContainer>
        </>
    );
}

export default App;
