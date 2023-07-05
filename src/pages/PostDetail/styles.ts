import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1rem;
`

export const ContentContainer = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -5.5rem;
  position: relative;
  padding: 2rem 2.5rem;

  & > h1 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

  & > div {
    margin-top: 4.5rem;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const Details = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 2rem;

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
