import React from 'react';
import styled from 'styled-components';
import design_presets from '../design_presets/presets.json';

const NavBarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    height: 100%;
    width: 100%;
`;

const NavGroup = styled.div`
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 20px;
    margin-left: 20px;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : design_presets['general-colors'].black)};
    &:link,
    &:visited {
        text-decoration: none;
        color: inherited;
    }
    margin-right: 20px;
    margin-left: 20px;
`;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarContainer>
                <NavGroup>
                    <Link href={'google.com'} color={design_presets['general-colors'].orange}>
                        RESUME
                    </Link>
                    <Link href={'google.com'}>GITHUB</Link>
                    <Link href={'google.com'}>LINKEDIN</Link>
                </NavGroup>
            </NavBarContainer>
        );
    }
}

export default NavBar;
