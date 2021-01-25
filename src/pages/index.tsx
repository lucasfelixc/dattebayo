import { Container } from '../styles/pages/Home/style'

import Header from './Components/Header'
import Main from './Components/Main'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="contentLine">
        <div className="line"></div>
      </div>
      <Main />
    </Container>
  )
}

export default Home
