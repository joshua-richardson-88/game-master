// react
import React, { useEffect, useState } from 'react'

// modules
import { useRecoilValue } from 'recoil'

// project files
import { SHomePage, SBody, SContent } from './HomePageStyles'
import { AltSidebar, Header, Sidebar } from 'components'
import { altMenuOpen, currentPage, mainMenuOpen } from 'state/recoil'
import { SettingsPage } from 'pages'

export default function HomePage() {
  const page = useRecoilValue(currentPage)
  const mainOpen = useRecoilValue(mainMenuOpen)
  const altOpen = useRecoilValue(altMenuOpen)
  const [content, setContent] = useState<React.ReactNode>(null)

  useEffect(() => {
    switch (page.value) {
      case 10:
        setContent(null)
        break
      case 11:
        setContent(<SettingsPage />)
        break
      default:
        setContent(<div />)
        break
    }
  }, [page])

  return (
    <SHomePage>
      <Sidebar />
      <AltSidebar />
      <SBody id='body' mainOpen={mainOpen} altOpen={altOpen}>
        <Header />
        <SContent>{content}</SContent>
      </SBody>
    </SHomePage>
  )
}
