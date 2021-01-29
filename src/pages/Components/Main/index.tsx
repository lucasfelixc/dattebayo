import { useRouter } from 'next/router'
import Image from 'next/image'

import { Container, Content } from '../../../styles/pages/components/Main'

interface content {
  sendInfo: (e: string) => void

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
    }
  }>
}

const Main: React.FC<content> = ({ arrContent, sendInfo }) => {
  const { pathname } = useRouter()
  const contentProductions = arrContent

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
                  sendInfo(value.attributes.titles.en_jp)
                } else {
                  sendInfo(value.attributes.titles.en)
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
