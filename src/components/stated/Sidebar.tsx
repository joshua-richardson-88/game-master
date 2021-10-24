// react
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

// modules
import { useRecoilState, useRecoilValue } from 'recoil'

// project files
import { mainMenuOpen, navigationPages } from 'state/recoil'
import theme from 'styles/theme'
import { SSideBar, SMenuItemContainer, SLogo, SDivider } from 'ui_components'
import { Button, MenuItem, NavItem, Typography } from 'components'
import { CloseIcon, MenuIcon } from 'icons'

export const Sidebar = () => {
  const [open, setOpen] = useRecoilState(mainMenuOpen)
  const pageGroups = useRecoilValue(navigationPages)
  const { user } = useAuth0()

  const handleMenuOpen = () => setOpen((prevState) => !prevState)

  return (
    <SSideBar mainOpen={open}>
      <MenuItem isOpen={open}>
        {open && (
          <SMenuItemContainer>
            <Typography component='h6' wrap='nowrap' color='secondary'>
              Digital Evidence Locker
            </Typography>
          </SMenuItemContainer>
        )}
        <Button onClick={handleMenuOpen} size='medium' color='secondary'>
          {open ? (
            <CloseIcon style={iconStyle} />
          ) : (
            <MenuIcon style={iconStyle} />
          )}
        </Button>
      </MenuItem>
      <MenuItem isOpen={open}>
        <SLogo src='/logo.png' alt='Agency Logo' open={open} />
        {open && (
          <SMenuItemContainer>
            <Typography component='body2' color='secondary'>
              {CLIENT_NAME}
            </Typography>
          </SMenuItemContainer>
        )}
      </MenuItem>
      {pageGroups
        .filter(
          (group) =>
            user &&
            user['http://linear-systems.com/roles'].includes(
              group.groupRequired
            )
        )
        .map((pageGroup) => (
          <React.Fragment key={pageGroup.title}>
            <SDivider />
            {open ? (
              <SMenuItemContainer>
                <Typography component='body2' color='secondary'>
                  {pageGroup.title}
                </Typography>
              </SMenuItemContainer>
            ) : (
              <SMenuItemContainer />
            )}
            {pageGroup.pages.map((page) => (
              <NavItem key={page.id} isOpen={open} data={page} />
            ))}
          </React.Fragment>
        ))}
    </SSideBar>
  )
}

const iconStyle = {
  height: '60%',
  color: theme.palette.secondary.main,
  fill: theme.palette.secondary.main,
}

const CLIENT_NAME = process.env.REACT_APP_CLIENT_NAME
