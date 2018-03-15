import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div `
    border: 1px solid black;
    padding: 40px;
    max-width: 350px;
    background-color: white;
`;
const Title = styled.h1 `
    color: blue;
    margin-bottom: 40px;
`;

const Image = styled.img `
    max-width: 100%;
    display: block;
    margin: 0 auto;
`;

export default class Card extends React.Component {
    render() {
        return (
            <CardWrapper>
                <Title>{this.props.title} </Title>
                <Image src={this.props.imageUrl} />
            </CardWrapper> 
        )
    }
};