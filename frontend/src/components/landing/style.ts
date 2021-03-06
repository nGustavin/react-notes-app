import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    //background-color: #11054e;
    background: linear-gradient(193deg, rgba(17,5,78,1) 0%, rgba(232,20,108,1) 100%); 
    background-size: 600% 600%;
    animation: animatedBackground 10s ease infinite;
`

export const SideBar = styled.div` 
    width: 15vw;
    height: 100%;

    display: flex;

    padding: 30px;

    >button {
        width: 55px;
        height: 55px;

        border-radius: 16px;
        box-shadow: 0px 0px 0px 3px #6B3DFF;

        transition: 0.3s;

        :hover {
            cursor: pointer;

            border-radius: 32px;
        }
    }
`

export const CardContainer = styled.div`
    padding: 30px 30px 30px 3px;
    display: grid;

    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: masonry;
    grid-gap: 20px;

    overflow-x: hidden;
`
