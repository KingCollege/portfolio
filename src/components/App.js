import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Layout from './Layout';
import MyProjects from '../components/about_me/MyProjects';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Nirmala UI", "Times New Roman", Times, serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
         scrollbar-width: none;
    }

    body::-webkit-scrollbar {
        display: none;
    }   

    p, a, button {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none; 
        -ms-user-select: none; 
        user-select: none; 
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
                <Layout>
                    <MyProjects />
                </Layout>
            </>
        );
    }
}

export default App;
