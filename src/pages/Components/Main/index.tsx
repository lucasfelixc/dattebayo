import { useRouter } from 'next/router'
import Image from 'next/image'

import { Container, Content } from '../../../styles/pages/components/Main'
import { useEffect, useState } from 'react'

interface content {
  sendInfo: (
    title: string,
    youtubeVideoId: string,
    average: string,
    age: string,
    synopsis: string
  ) => void

  arrContent: Array<{
    attributes: {
      coverImage: {
        original: string
      }
      posterImage: {
        original: string
      }
      titles: {
        en: string
        en_jp: string
      }
      canonicalTitle: string
      youtubeVideoId: string
      averageRating: string
      ageRatingGuide: string
      synopsis: string
    }
  }>
}

const Main: React.FC<content> = ({ arrContent, sendInfo }) => {
  const [contentProductions, setContentProductions] = useState([])

  const { pathname } = useRouter()
  // const contentProductions = arrContent
  useEffect(() => {
    setContentProductions(arrContent)
  }, [])

  console.log(contentProductions)

  return (
    <Container>
      <div className="contentCall">
        {pathname === '/' && <strong>Em alta</strong>}
      </div>
      <Content>
        {contentProductions.map((value, index) => {
          return (
            <div
              className="top"
              key={index}
              onClick={() => {
                if (value.attributes.titles.en === null) {
                  sendInfo(
                    value.attributes.titles.en_jp,
                    value.attributes.youtubeVideoId,
                    value.attributes.averageRating,
                    value.attributes.ageRatingGuide === null ||
                      value.attributes.ageRatingGuide === ''
                      ? '10+'
                      : value.attributes.ageRatingGuide,
                    value.attributes.synopsis
                  )
                } else {
                  sendInfo(
                    value.attributes.titles.en,
                    value.attributes.youtubeVideoId,
                    value.attributes.averageRating,
                    value.attributes.ageRatingGuide === null ||
                      value.attributes.ageRatingGuide === ''
                      ? '10+'
                      : value.attributes.ageRatingGuide,
                    value.attributes.synopsis
                  )
                }
              }}
            >
              <Image
                src={value.attributes.posterImage.original}
                alt="Cover image"
                width={160}
                height={200}
                layout="responsive"
              />
            </div>
          )
        })}
      </Content>
    </Container>
  )
}

export default Main
