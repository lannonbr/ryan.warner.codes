import React from 'react'

import * as S from './styles'
import { Article, Footer, Width } from 'components'

export default ({ data }) => {
  const { edges: articles } = data.allMdx

  return (
    <>
      <Width>
        <S.ArticlesComponent>
          <S.Title>Snippets</S.Title>
          <ul>
            {articles.map(({ node: post }) =>
              <li key={post.id}>
                <Article {...post} />
              </li>
            )}
          </ul>
        </S.ArticlesComponent>
      </Width>
      <Footer />
    </>
  )
}