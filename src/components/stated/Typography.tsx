// react
import React from 'react'

// modules

// project files
import {
  SBody1,
  SBody2,
  SHeading1,
  SHeading2,
  SHeading3,
  SHeading4,
  SHeading5,
  SHeading6,
  SSubtitle,
} from 'ui_components'

interface Props {
  children: React.ReactNode
  component:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'body1'
    | 'body2'
  color?: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  align?: 'start' | 'end' | 'center' | 'stretch'
  visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit'
}
export default function Typography({
  children,
  component = 'body1',
  color = 'primary',
  direction = 'row',
  wrap = 'nowrap',
  justify = 'flex-start',
  align = 'start',
  visibility = 'visible',
}: Props) {
  switch (component) {
    case 'h1':
      return (
        <SHeading1
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SHeading1>
      )
    case 'h2':
      return (
        <SHeading2
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SHeading2>
      )
    case 'h3':
      return (
        <SHeading3
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SHeading3>
      )
    case 'h4':
      return (
        <SHeading4
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SHeading4>
      )
    case 'h5':
      return (
        <SHeading5
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SHeading5>
      )
    case 'h6':
      return (
        <SHeading6
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SHeading6>
      )
    case 'body1':
      return (
        <SBody1
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SBody1>
      )
    case 'body2':
      return (
        <SBody2
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SBody2>
      )
    case 'subtitle':
      return (
        <SSubtitle
          direction={direction}
          wrap={wrap}
          justify={justify}
          align={align}
          visibility={visibility}
          color={color}
        >
          {children}
        </SSubtitle>
      )
  }
}
