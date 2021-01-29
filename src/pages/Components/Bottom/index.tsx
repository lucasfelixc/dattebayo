import { useState } from 'react'
import Link from 'next/link'

import { Container } from '../../../styles/pages/components/Bottom'

import PlayMin from '../../../assets/icons/playmin.svg'

interface content {
  title: string
  idYouTube: string
  averageRating: string
  ageRatingGuide: string
  synopsis: string
}

const Bottom: React.FC<content> = ({
  title,
  idYouTube,
  averageRating,
  ageRatingGuide,
  synopsis
}) => {
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
        <div className="title">{title}</div>
        <button className="play">
          <a href={`https://www.youtube.com/watch?v=${idYouTube}`} />
          <PlayMin />
        </button>
      </div>
      <div className="shadow" onClick={handleClickInfo}></div>
      {moreInfo && (
        <>
          <div className="indicators">
            <div className="relevant">
              <span>{`${averageRating}%`}</span>
            </div>
            <div className="ageRating">
              <span>{ageRatingGuide}</span>
            </div>
          </div>
          <div className="synopsis">
            <p>{synopsis}</p>
          </div>
        </>
      )}
    </Container>
  )
}

export default Bottom
