import React from 'react';
import styled from 'styled-components';
import design_presets from '../design_presets/presets.json';

const NavBarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    height: 100%;
    width: 100%;
`;

const NavGroup = styled.div`
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 130px;
    margin-left: 20px;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => (props.color ? props.color : design_presets['general-colors'].white)};
    &:link,
    &:visited {
        text-decoration: none;
        color: inherited;
    }
    margin-right: 20px;
    margin-left: 20px;
`;

const Name = styled.p`
    display: flex;
    align-items: center;
    color: ${design_presets['general-colors'].blue};
    font-size: 35px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 150px;
`;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            my_name: 'MANDU SHI ._',
            typing_name: '',
            name_index: 0,
            time_elapsed: 50, //ms
        };
        this.start_fps = new Date().getTime();
        this.animate_name = this.animate_name.bind(this);
    }

    componentDidMount() {
        this.animate_name();
    }

    animate_name() {
        var now = new Date().getTime();

        if (now - this.start_fps >= this.state.time_elapsed) {
            if (this.state.typing_name !== this.state.my_name) {
                this.setState({
                    typing_name: this.state.typing_name + this.state.my_name[this.state.name_index],
                    name_index: (this.state.name_index + 1) % this.state.my_name.length,
                });
            } else {
                this.setState({
                    typing_name: this.state.my_name.substr(0, this.state.my_name.length - 3),
                    name_index: this.state.my_name.length - 3,
                    time_elapsed: 300,
                });
            }
            this.start_fps = now;
        }

        requestAnimationFrame(this.animate_name);
    }

    render() {
        return (
            <NavBarContainer>
                <Name>{this.state.typing_name}</Name>
                <NavGroup>
                    <Link href={'https://github.com/KingCollege'}>GITHUB</Link>
                    <Link href={'https://www.linkedin.com/in/mandu-shi-87a90b1a6/'}>LINKEDIN</Link>
                </NavGroup>
            </NavBarContainer>
        );
    }
}

export default NavBar;
