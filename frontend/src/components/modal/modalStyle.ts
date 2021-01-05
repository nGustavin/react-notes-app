import styled, {css} from 'styled-components'


export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    background: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
   
`

export const Title = styled.div`
    background: none;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    >h1 {
        color: white;
        font-weight: 300;
        font-size: 45px;
        font-family: 'Quicksand', sans-serif;
    }
`

export const Body = styled.div`
    background: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > form{
        height: 100%;
        display: flex;
        flex-direction: column;

        > input{
            font-size: 24pt;
            font-family: 'Quicksand', sans-serif;
            border-bottom: solid 2px rgba(255, 255, 255, 0.2);
            color: white;
            padding: 5px 20px;
            transition: 0.5s;
            outline: none;

            :hover{
                border-bottom: solid 2px rgba(255, 255, 255, 1);
            }

            :focus{ 
                border-bottom: solid 2px #48ffac;
                outline: none;
                transition: 0.3s;
            }
            
        }

        > textarea {
            resize: none;
            width: 100%;
            font-size: 16pt;
            font-weight: 500;
            font-family: 'Quicksand', sans-serif;
            color: white;
            border-bottom: solid 2px rgba(255, 255, 255, 0.2);
            padding: 10px 20px;
            margin: 5px auto;
            background-color: 'hsla(0, 0%, 100%, 0.25)';
            border-radius: 4px;
            height: 100%;
            transition: 0.5s;

            :hover{
                border-bottom: solid 2px rgba(255, 255, 255, 1);
            }

            :focus{ 
                border-bottom: solid 2px #48ffac;
                outline: none;
                transition: 0.3s;
            }
        }
    }

    > button{
        margin-top: 10px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.9);
        width: 150px;
        height: 40px;
        outline: none;
        border-radius: 4px;
        box-shadow: 0px 0px 0px 2px rgba(255, 255, 255, 0.7);
        font-size: 20px;
        cursor: pointer;
        transition: 0.3s;

        :hover{
           
            color: white;
            box-shadow: 0px 0px 0px 2px #48ffac;
        }

        :focus{
            color: #48ffac;
            box-shadow: 0px 0px 0px 2px #48ffac;
        }
    }

  


/* ::placeholder{
color: white;
opacity: 1
}

button{
    transition-duration: 0.5s;
}

button:hover{
    background-color: white;
    color: black;
} */
`

export const CreateNote = styled.button`

`

export const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content : {
      borderRadius: '10px',
      boxShadow: '0px 0px 0px 2px white',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '700px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'space-between',
      backgroundColor:'rgb(142,45,226)',
      background: 'linear-gradient(159deg, rgba(142,45,226,1) 0%, rgba(74,0,224,1) 100%)',
    }
}