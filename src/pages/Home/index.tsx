import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBuilding,
  FaUserGroup,
} from 'react-icons/fa6'
import { PostCard } from './components/PostCard'
import { Header } from '../../components/Header'
import {
  Container,
  Description,
  Details,
  PostListContainer,
  PostsContainer,
  ProfileContainer,
  TitleContainer,
} from './styles'

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <ProfileContainer>
          <img
            src="https://avatars.githubusercontent.com/u/18452687?v=4"
            alt=""
          />
          <div>
            <TitleContainer>
              <h1>Carlos Henrique Kruger</h1>
              <a
                href="https://github.com/carloshkruger"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
                <FaArrowUpRightFromSquare />
              </a>
            </TitleContainer>
            <Description>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </Description>
            <Details>
              <div>
                <FaGithub />
                <span>carloshkruger</span>
              </div>

              <div>
                <FaBuilding />
                <span>Rocketseat</span>
              </div>

              <div>
                <FaUserGroup />
                <span>32 seguidores</span>
              </div>
            </Details>
          </div>
        </ProfileContainer>

        <PostsContainer>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>

          <form>
            <input type="search" name="search" placeholder="Buscar conteúdo" />
          </form>

          <PostListContainer>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </PostListContainer>
        </PostsContainer>
      </Container>
    </>
  )
}
