import React from 'react'
import { MdCreate, MdShare, MdClear } from 'react-icons/md'
import { CardContainer, Note, Toolbar } from './style'

const Card: React.FC= () => {
    return (
        <CardContainer>
            <Note>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores cupiditate possimus atque, porro maiores, ex vel numquam dolor veritatis vitae molestias? Non, tempore commodi. Quo reiciendis itaque beatae non.</p>
            </Note>

            <Toolbar>
                <button type="submit">
                    <MdCreate/>
                </button>

                <button type="submit">
                    <MdShare/>
                </button>

                <button type="submit">
                    <MdClear/>
                </button>
            </Toolbar>
        </CardContainer>
    )
}

export default Card