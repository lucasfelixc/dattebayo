import { Container } from '../styles/pages/Home'

import Header from './Components/Header'
import Main from './Components/Main'
import Bottom from './Components/Bottom'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="contentLine">
        <div className="line"></div>
      </div>
      <Main />
      <Bottom />
    </Container>
  )
}

export default Home
