import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Layout from './Layout';
import AboutMe from './about_me/AboutMe';
import Canvas from './animation/Canvas';

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

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <GlobalStyle />
                <Canvas />
                <Layout>
                    <AboutMe />
                </Layout>
            </>
        );
    }
}

export default App;
