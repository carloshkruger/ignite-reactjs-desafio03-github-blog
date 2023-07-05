import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const ProfileContainer = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  height: 13.45rem;
  margin-top: -5.5rem;
  position: relative;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  & > div {
    flex: 1;
  }

  img {
    border-radius: 8px;
    max-width: 9.25rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    font-size: 0.75rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    border-bottom: 1px solid ${(props) => props.theme['base-background']};

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-family: Nunito;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin-top: 0.5rem;
`

export const Details = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1rem;
      font-family: Nunito;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }
`

export const PostsContainer = styled.div`
  margin-top: 4.5rem;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
      font-family: Nunito;
      font-style: normal;
      font-weight: 700;
      line-height: 160%;
    }

    span {
      ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      font-family: Nunito;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    }
  }

  form input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PostListContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
`
