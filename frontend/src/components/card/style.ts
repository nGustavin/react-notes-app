import styled from 'styled-components'

export const Toolbar = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 10px;

    display: flex;
    justify-content: space-between;

    opacity: 0;
    transition: 0.3s;

    >button {
        cursor: pointer;
    }
`

export const MainCard = styled.div`
    padding: 15px;
    background: white;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    background: #5B33E0;

    transition: 0.3s;

    :hover {
        background: #6B3DFF;
        box-shadow: 0px 0px 0px 2px white;

        >${Toolbar} {
            opacity: 1;
        }
    }
`

export const Note = styled.div`
    >p {
        font-family: 'Roboto', sans-serif;
        color: white;
    }
`