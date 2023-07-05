import styled from 'styled-components'

export const PostContainer = styled.div`
  a {
    text-decoration: none;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid ${(props) => props.theme['base-post']};
  padding: 2rem;
  cursor: pointer;

  div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
      flex: 1;
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      font-family: Nunito;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      font-family: Nunito;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const Content = styled.div`
  width: 100%;
  margin-top: 1.25rem;

  color: ${(props) => props.theme['base-text']};

  font-size: 1rem;
  font-family: Nunito;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
