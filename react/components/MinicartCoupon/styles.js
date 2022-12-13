import styled, { keyframes } from 'styled-components';

const colors = {
    green: '#49e87b',
    gray: '#707070',
    red: '#e31f1a',
};

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    @media (max-width: 1025px) {
        padding: 0 12px 24px;
    }
    @media (max-width: 768px) {
        padding: 0px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`;

export const Message = styled.span`
    font-size: 12px;
    color: ${(p) => (p.error ? colors.red : colors.gray)};
    font-weight: bold;
`;

export const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #707070;
    padding: 8px 8px 8px 0;
    font-size: 16px;
    width: 65%;
    font-family: Gotham,arial,sans-serif;
    @media (max-width: 428px) {
        font-size: 14px;
    }
    @media (max-width: 404px) {
        font-size: 12px;
    }
    &:focus {
        outline: none;
    }
    &[disabled] {
        border: 0;
        font-weight: bold;
        padding-left: 35px;
    }
    &::placeholder {
        color: #292929;
    }
`;

export const Button = styled.button`
    background: #C0C0C0;
    color: #000;
    font-size: 16px;
    font-weight: 300;
    padding: 8.5px;
    cursor: pointer;
    border: none;
    width: 25%;
    border-radius: 8px;
    transition: all .3s ease-in-out;
    font-family: Gotham,arial,sans-serif;
    @media (max-width: 428px) {
        font-size: 14px;
    }
    @media (max-width: 404px) {
        font-size: 12px;
    }
    &:focus {
        outline: none;
        border: none;
    }
    &:hover {
        opacity: 0.8;
    }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    border: 5px solid #e8e8e8;
    border-top: 5px solid ${colors.red};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: ${spin} 2s linear infinite;
    margin: 0 auto;
`;

export const DiscountWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    z-index: 0;
    button {
        padding: 2px 8px;
        width: initial;
        font-weight: 600;
        background: 0;
        position: absolute;
        z-index: 5;
        left: 0;
    }
`;

export const Discount = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
`;
