import React from 'react'
import { MdCreate, MdShare, MdClear } from 'react-icons/md'
import { MainCard, Note, Toolbar } from './style'

interface Props {
    text?: boolean
}

const Card: React.FC<Props>= ({text}) => {
    return (
        <MainCard>
            <Note>
                {
                    text?<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quam assumenda quaerat laudantium. Consequatur sequi aliquam optio consectetur non expedita quas. Nobis blanditiis, quidem itaque vero in nesciunt suscipit illo.</p>
                    :<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam tenetur in amet esse at quod, alias veritatis maiores eveniet consequatur dolor placeat consequuntur possimus, ipsum accusantium voluptas, architecto sed similique.Doloremque nemo mollitia repellendus. Cumque porro corrupti impedit dolore nesciunt quas repellat asperiores beatae est quibusdam, nam sequi rem obcaecati tenetur! Ut error nulla inventore mollitia alias, modi similique aspernatur.</p>
                }
            </Note>

            <Toolbar>
                <button type="submit">
                    <MdCreate size={19} fill={'white'}/>
                </button>

                <button type="submit">
                    <MdShare size={19} fill={'white'}/>
                </button>

                <button type="submit">
                    <MdClear size={19} fill={'white'}/>
                </button>
            </Toolbar>
        </MainCard>
    )
}

export default Card