import { useRouter } from 'next/router'

import { Container, Content } from '../../../styles/pages/components/Main'

const Main: React.FC = () => {
  const { pathname } = useRouter()
  console.log(pathname)

  return (
    <Container>
      <div className="contentCall">
        {pathname === '/' && <strong>Em alta</strong>}
      </div>
      <Content>
        <div className="top One"></div>
        <div className="top Two"></div>
        <div className="top Three"></div>
        <div className="top Four"></div>
      </Content>
    </Container>
  )
}

export default Main
