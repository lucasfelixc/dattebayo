import { useRouter } from 'next/router'

import { Container, Content } from '../../../styles/pages/components/Main'

interface content {
  arrContent: Array<{
    attributes: {
      coverImage: {
        original: string
      }
      titles: {
        en: string
      }
      canonicalTitle: string
    }
  }>
}

const Main: React.FC<content> = arrContent => {
  const { pathname } = useRouter()
  const contentProductions = arrContent
  console.log(contentProductions)

  return (
    <Container>
      <div className="contentCall">
        {pathname === '/' && <strong>Em alta</strong>}
      </div>
      <Content>
        {/* {contentProductions.map(value => {
          return (
            <div className="top" key={value.id}>
              <img src="" alt="" />
            </div>
          )
        })} */}
        {/* <div className="top One"></div>
        <div className="top Two"></div>
        <div className="top Three"></div>
        <div className="top Four"></div> */}
      </Content>
    </Container>
  )
}

export default Main
