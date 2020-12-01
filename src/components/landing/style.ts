import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
`

export const SideBar = styled.div` 
    width: 15vw;
    height: 100%;

    display: flex;

    background: red;

    >button {
        width: 100%;
        height: 60px;

        background: blue;
        color: black;
    }
`

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;

    background: black;
`
