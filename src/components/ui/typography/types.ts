export type Props = {
  color?: string
  direction: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
  align: 'start' | 'end' | 'center' | 'stretch'
  visibility: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit'
}
