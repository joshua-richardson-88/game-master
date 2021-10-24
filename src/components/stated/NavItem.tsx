// react
import React, { useEffect, useState } from 'react'

// modules
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

// project files
import { altMenuOpen, mainMenuOpen, currentPage } from 'state/recoil'
import { item } from 'state/recoil/types'
import {
  BriefcaseIcon,
  CloudUploadIcon,
  FilmIcon,
  HomeIcon,
  PencilIcon,
  ReportsIcon,
  SettingsIcon,
  SearchIcon,
  VideoCameraIcon,
} from 'icons'
import { Typography } from 'components'
import { SIconContainer, SNavItem } from 'ui_components'
import theme from 'styles/theme'

type Props = {
  isOpen: boolean
  data: item
}
export default function NavItem({
  isOpen,
  data: { id, label, alt, actionMenu },
}: Props) {
  const setAltOpen = useSetRecoilState(altMenuOpen)
  const open = useRecoilValue(mainMenuOpen)
  const [selected, setSelected] = useRecoilState(currentPage)
  const [icon, setIcon] = useState<React.ReactNode>(null)
  const [isSelected, setIsSelected] = useState(false)

  // setting the icon
  useEffect(() => {
    const iconStyle = {
      height: '60%',
      color: 'transparent',
      fill: isSelected
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    }
    switch (alt) {
      case 'Monitoring':
        setIcon(<BriefcaseIcon style={iconStyle} />)
        break
      case 'Reports':
        setIcon(<ReportsIcon style={iconStyle} />)
        break
      case 'Settings':
        setIcon(<SettingsIcon style={iconStyle} />)
        break
      case 'Dashboard':
        setIcon(<HomeIcon style={iconStyle} />)
        break
      case 'Edit':
        setIcon(<PencilIcon style={iconStyle} />)
        break
      case 'Record':
        setIcon(<VideoCameraIcon style={iconStyle} />)
        break
      case 'Search':
        setIcon(<SearchIcon style={iconStyle} />)
        break
      case 'Upload':
        setIcon(<CloudUploadIcon style={iconStyle} />)
        break
      case 'View Live':
        setIcon(<FilmIcon style={iconStyle} />)
        break
    }
  }, [alt, isSelected])

  // updates to current page selection
  useEffect(() => {
    setIsSelected(selected.mainValue === id)
  }, [id, selected])

  const handleClick = () => {
    if (actionMenu) {
      let shouldUpdate = true
      // check if the action menu contains the current page
      // if it does, don't update the selected page
      actionMenu.pages.some((page) => {
        if (selected.value === page.id) {
          shouldUpdate = false
          return true
        }
        return false
      })

      if (shouldUpdate) {
        setSelected({ mainValue: id, value: id, title: label })
        setAltOpen(true)
      }
      setAltOpen(true)
      // setMainOpen(false)
    } else {
      setAltOpen(false)
      setSelected({ mainValue: id, value: id, title: label })
    }
  }

  return (
    <SNavItem isSelected={isSelected} isOpen={open} onClick={handleClick}>
      <SIconContainer>{icon}</SIconContainer>
      {isOpen ? (
        <Typography
          component='body1'
          color={isSelected ? 'primary' : 'secondary'}
        >
          {label}
        </Typography>
      ) : null}
    </SNavItem>
  )
}
