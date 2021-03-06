import styled from 'styled-components'

import { Breakpoints, Colors, Type } from '../../styles'
import { Link } from '../'
import { ReactLogo, Heart, VSCode, Gatsby } from 'components/Icons'

export const ArticleSnippet = styled(Link)`
  padding: 20px 20px 20px 0;
  margin-bottom: 6px;
  width: 100%;
  display: flex;
  cursor: pointer;
  transition: background .2s ease-in-out;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background-color: ${Colors.glowOpacity};

    &:after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      background-color: #DEFFE7;
      position: absolute;
      left: 0;
      top: 0;
      box-shadow: 3px 0 22px rgba(14, 255, 77, .5);
      border-radius: 6px 0 0 0;
    }
  }

  @media(min-width: ${Breakpoints.mobile}) {
    padding: 26px 26px 26px 0;
  margin-bottom: 16px;
  }
`

export const Content = styled.div``

export const Title = styled.h4`
  margin: 0;
  font-size: 18px;
  color: ${Colors.text10};
  font-weight: ${Type.fontWeights.medium};
  min-height: 30px;

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 16px;
  }
`

export const Date = styled.time`
  font-size: 12px;
  color: ${Colors.blue50};
  margin-top: 3px;
  display: block;
`

export const Icon = styled.div`
  width: 50px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 90px;
    height: 30px;
  }
`

export const StyledReactLogo = styled(ReactLogo)`
  width: 22px;
  height: 22px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 28px;
    height: 28px;
  }
`

export const StyledHeart = styled(Heart)`
  width: 16px;
  height: 16px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 22px;
    height: 22px;
  }
`

export const StyledVSCode = styled(VSCode)`
  width: 22px;
  height: 22px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 28px;
    height: 28px;
  }
`


export const ScreenFlow = styled.img`
  width: 18px;
  height: 18px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`

export const StyledGatsby = styled(Gatsby)`
  width: 18px;
  height: 18px;

  @media(min-width: ${Breakpoints.mobile}) {
    width: 22px;
    height: 22px;
  }
`
