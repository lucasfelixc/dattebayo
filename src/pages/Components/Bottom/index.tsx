import { Container } from '../../../styles/pages/components/Bottom'
import PlayMin from '../../../assets/icons/playmin.svg'
import { useState } from 'react'

const Bottom: React.FC = () => {
  const [moreInfo, setMoreInfo] = useState(false)

  const handleClickInfo = () => {
    setMoreInfo(!moreInfo)
  }

  return (
    <Container more={moreInfo}>
      <div className="moreInfo">
        <button className="plus" onClick={handleClickInfo}>
          <div className="display"></div>
        </button>
      </div>
      <div className="content">
        <div className="title"></div>
        <button className="play">
          <PlayMin />
        </button>
      </div>
    </Container>
  )
}

export default Bottom
