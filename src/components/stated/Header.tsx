// react
import React, { useEffect, useState } from 'react'

// modules
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

// project files
import { altMenuOpen, currentPage, mainMenuOpen } from 'state/recoil'
import { AuthButton, Typography } from 'components'

export const Header = () => {
  const mainOpen = useRecoilValue(mainMenuOpen)
  const altOpen = useRecoilValue(altMenuOpen)
  const page = useRecoilValue(currentPage)
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(page.title)
  }, [page])

  return (
    <Head mainOpen={mainOpen} altOpen={altOpen}>
      <Typography component='h5' color='primary'>
        {pageTitle}
      </Typography>
      <AuthButton mode='logout' />
    </Head>
  )
}

interface PageProps {
  mainOpen: boolean
  altOpen: boolean
}
const Head = styled.div<PageProps>`
  height: 4rem;
  width: 100%;
  z-index: 60;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background.default};
  padding: 0 1rem;
  transition-property: all;
  transition-duration: ${(props) =>
    `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) =>
    props.theme.transitions.easing.easeInOut};
`
