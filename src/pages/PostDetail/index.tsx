import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { Header } from '../../components/Header'
import {
  ActionsContainer,
  Container,
  ContentContainer,
  Details,
} from './styles'
import { Link } from 'react-router-dom'

export function PostDetail() {
  return (
    <>
      <Header />
      <Container>
        <ContentContainer>
          <ActionsContainer>
            <Link to="/">
              <FaChevronLeft />
              Voltar
            </Link>
            <a
              href="https://github.com/carloshkruger"
              target="_blank"
              rel="noreferrer"
            >
              Ver no GitHub
              <FaArrowUpRightFromSquare />
            </a>
          </ActionsContainer>

          <h1>JavaScript data types and data structures</h1>

          <Details>
            <div>
              <FaGithub />
              <span>carloshkruger</span>
            </div>

            <div>
              <FaCalendarDay />
              <span>Há 1 dia</span>
            </div>

            <div>
              <FaComment />
              <span>5 comentários</span>
            </div>
          </Details>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in JavaScript and what
            properties they have. These can be used to build other data
            structures. Wherever possible, comparisons with other languages are
            drawn. Dynamic typing JavaScript is a loosely typed and dynamic
            language. Variables in JavaScript are not directly associated with
            any particular value type, and any variable can be assigned (and
            re-assigned) values of all types:
          </p>
        </ContentContainer>
      </Container>
    </>
  )
}
