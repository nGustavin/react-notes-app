import styled from 'styled-components';
import Popup from 'reactjs-popup';

export const StyledPopup = styled(Popup)`
    // use your custom style for ".popup-overlay"
    &-overlay {
      background: rgba(0,0, 0, 0.7);
  }
  // use your custom style for ".popup-content"
  &-content {
    position: absolute;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    bottom: 25%;
    
    width: 600px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > #cardpopup{
      background: #5B33E0;
      box-shadow: 0px 0px 0px 2px white;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 20px;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 15px;
      >h1{
        font-weight: 400;
        color: white;
      }
      > .titleInput {
          background: rgba(255, 255, 255, 0.5);
          border-radius: 4px;
          box-shadow: 0px 0px 0px 2px white;
          width: 400px;
          height: 65px;
          outline: none;
          padding: 0px 20px;
          font-size: 20px;
          color: white;
          transition: 0.2s;
        :hover{
          background: rgba(255, 255, 255, 0.7)
        }
      }
      > .bodyInput {

      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;