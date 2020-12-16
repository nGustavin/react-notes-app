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

    min-height: 300px;
    min-width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
    width: 100%;

    >p {
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 16px;

        text-align: left;
    }

    >h1 {
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 18px;

        text-align: center;

        margin-bottom: 10px;

        max-height: 100px;
        overflow-y: hidden;
    }
`