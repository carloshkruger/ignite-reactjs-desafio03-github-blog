import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaBuilding,
  FaUserGroup,
} from 'react-icons/fa6'
import * as z from 'zod'
import { Post, PostCard } from './components/PostCard'
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
import { useEffect, useState } from 'react'
import {
  REPO_ISSUES_URL,
  SEARCH_ISSUES_URL,
  USER_AND_REPO_NAME,
  api,
} from '../../lib/api'
import { useForm } from 'react-hook-form'

const MY_GITHUB_USERNAME = 'carloshkruger'

interface GitHubUser {
  avatar_url: string
  company: string
  followers: number
  login: string
  name: string
  bio: string
  html_url: string
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function Home() {
  const [userData, setUserData] = useState<GitHubUser | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const { handleSubmit, register } = useForm<SearchFormType>()

  async function handleSearchPosts({ query }: SearchFormType) {
    if (!query) {
      return fetchAllPosts()
    }

    const response = await api.get(SEARCH_ISSUES_URL, {
      params: {
        q: `${query} repo:${USER_AND_REPO_NAME}`,
      },
    })
    setPosts(response.data.items)
  }

  async function fetchUserData() {
    const response = await api.get(`/users/${MY_GITHUB_USERNAME}`)
    setUserData(response.data)
  }

  async function fetchAllPosts() {
    const response = await api.get(REPO_ISSUES_URL)
    setPosts(response.data)
  }

  useEffect(() => {
    fetchUserData()
    fetchAllPosts()
  }, [])

  if (!userData) {
    return <></>
  }

  return (
    <>
      <Header />
      <Container>
        <ProfileContainer>
          <img src={userData.avatar_url} alt="" />
          <div>
            <TitleContainer>
              <h1>{userData.name}</h1>
              <a href={userData.html_url} target="_blank" rel="noreferrer">
                GITHUB
                <FaArrowUpRightFromSquare />
              </a>
            </TitleContainer>
            <Description>{userData.bio}</Description>
            <Details>
              <div>
                <FaGithub />
                <span>{userData.name}</span>
              </div>

              <div>
                <FaBuilding />
                <span>{userData.company}</span>
              </div>

              <div>
                <FaUserGroup />
                <span>{userData.followers} seguidores</span>
              </div>
            </Details>
          </div>
        </ProfileContainer>

        <PostsContainer>
          <div>
            <h2>Publicações</h2>
            <span>{posts.length} publicações</span>
          </div>

          <form onSubmit={handleSubmit(handleSearchPosts)}>
            <input
              type="search"
              placeholder="Buscar conteúdo"
              {...register('query')}
            />
          </form>

          <PostListContainer>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </PostListContainer>
        </PostsContainer>
      </Container>
    </>
  )
}
