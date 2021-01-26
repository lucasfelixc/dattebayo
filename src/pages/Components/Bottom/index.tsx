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
      <div className="shadow" onClick={handleClickInfo}></div>
      {moreInfo && (
        <>
          <div className="indicators">
            <div className="relevant">
              <span>80.6%</span>
            </div>
            <div className="ageRating">
              <span>Teens 13 or olders</span>
            </div>
          </div>
          <div className="synopsis">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              culpa qui officia deserunt mollit anim id est laborum.
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              culpa qui officia deserunt mollit anim id est laborum.
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </>
      )}
    </Container>
  )
}

export default Bottom
