import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
     opacity: .5;
    }
`;

export default Button; 