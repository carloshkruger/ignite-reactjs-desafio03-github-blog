import { Link } from 'react-router-dom'
import { Content, InfoContainer, PostContainer } from './styles'
import { formatDistanceFromNow } from '../../../../utils/dateFormatter'

export interface Post {
  id: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
  number: number
  user: {
    login: string
  }
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const publishedDateRelativeToNow = formatDistanceFromNow(
    new Date(post.created_at),
  )

  return (
    <PostContainer>
      <Link to={`/post-detail/${post.number}`}>
        <InfoContainer>
          <div>
            <strong>{post.title}</strong>
            <span>{publishedDateRelativeToNow}</span>
          </div>

          <Content>
            <p>{post.body}</p>
          </Content>
        </InfoContainer>
      </Link>
    </PostContainer>
  )
}
