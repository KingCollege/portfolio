import React from 'react';
import styled from 'styled-components';

const Board = styled.canvas`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    z-index: -2;
`;

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvas_ref = React.createRef();
        this.state = {
            inner_width: window.innerWidth,
            inner_height: window.innerHeight,
            p_outer_c_size: 7,
            p_inner_c_size: 5,
            number_of_p: 75,
            particles: [],
        };
    }

    componentDidMount() {
        this.draw_particles();
        requestAnimationFrame(this.update_particles.bind(this));
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize() {
        this.setState({
            inner_width: window.innerWidth,
            inner_height: window.innerHeight,
            particles: [],
            // number_of_p: window.innerWidth * 0.07,
        });
        this.draw_particles();
    }

    particle_size() {
        return this.state.p_inner_c_size + Math.random() * this.state.p_outer_c_size;
    }

    draw_particles() {
        const canvas = this.canvas_ref.current;
        const ctx = canvas.getContext('2d');
        const particles = [...this.state.particles];
        for (var i = this.state.particles.length; i < this.state.number_of_p; ++i) {
            var position = {
                x: Math.random() * this.state.inner_width,
                y: (Math.random() * this.state.inner_height) / 1.5,
            };

            ctx.fillStyle = '#777777';
            ctx.beginPath();
            ctx.arc(position.x, position.y + this.state.inner_height / 1.5, this.particle_size(), 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            particles.push(position);
        }
        this.setState({ particles });
        // this.connect_particles();
    }

    update_particles() {
        requestAnimationFrame(this.update_particles.bind(this));
        for (var i = 0; i < this.state.particles.length; ++i) {}
    }

    connect_particles() {}

    render() {
        return <Board ref={this.canvas_ref} width={this.state.inner_width} height={this.state.inner_height} />;
    }
}

export default Canvas;
