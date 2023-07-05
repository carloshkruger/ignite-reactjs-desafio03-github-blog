import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Header } from '../../components/Header'
import { Post } from '../Home/components/PostCard'
import { REPO_ISSUES_URL, api } from '../../lib/api'
import { formatDistanceFromNow } from '../../utils/dateFormatter'
import {
  ActionsContainer,
  Container,
  ContentContainer,
  Details,
} from './styles'

export function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    api
      .get(`${REPO_ISSUES_URL}/${id}`)
      .then((response) => setPost(response.data))
  }, [id])

  if (!post) {
    return <></>
  }

  const publishedDateRelativeToNow = formatDistanceFromNow(
    new Date(post.created_at),
  )

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
            <a href={post.html_url} target="_blank" rel="noreferrer">
              Ver no GitHub
              <FaArrowUpRightFromSquare />
            </a>
          </ActionsContainer>

          <h1>{post.title}</h1>

          <Details>
            <div>
              <FaGithub />
              <span>{post.user.login}</span>
            </div>

            <div>
              <FaCalendarDay />
              <span>{publishedDateRelativeToNow}</span>
            </div>

            <div>
              <FaComment />
              <span>{post.comments} comentários</span>
            </div>
          </Details>

          <div>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </ContentContainer>
      </Container>
    </>
  )
}
