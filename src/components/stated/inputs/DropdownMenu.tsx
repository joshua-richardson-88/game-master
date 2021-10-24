// react
import { FC, useRef } from 'react'

// modules

// project files
import {
  SDropdownContainer,
  SDropdownHeader,
  SDropdownItem,
  SDropdownList,
  SDropdownListContainer,
  SRow,
} from 'ui_components'
import useToggle from 'hooks/useToggle'
import useOutsideClick from 'hooks/useOutsideClick'

type Data = { [key: string]: string | undefined }
type Props = {
  allowMultiple?: boolean
  currentSelected: string
  data: Data[]
  disabled?: boolean
  multipleLimitReached?: boolean
  onDOMBody?: boolean
  openDirection?: 'up' | 'down'
  propertyToDisplay?: keyof Data
  selectedIndexes: number[]
  update: (index: number) => void
}
const DropdownMenu: FC<Props> = ({
  allowMultiple = false,
  currentSelected,
  data,
  disabled = false,
  multipleLimitReached = false,
  onDOMBody = true,
  openDirection = 'down',
  propertyToDisplay,
  selectedIndexes,
  update,
}) => {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useToggle(false)

  const handleShowDropdown = () => setIsOpen()
  const handleOutsideClick = () => setIsOpen(false)
  const handleUpdate = (index: number) => () => {
    update(index)
    if (!allowMultiple) setIsOpen(false)
  }

  useOutsideClick(ref, handleOutsideClick, onDOMBody)

  return (
    <SDropdownContainer ref={ref}>
      <SDropdownHeader disabled={disabled} onClick={handleShowDropdown}>
        {currentSelected}
      </SDropdownHeader>
      {isOpen && (
        <SDropdownListContainer direction={openDirection}>
          <SDropdownList>
            {data.map((option, index) => {
              console.log('can select: ', !disabled && !multipleLimitReached)
              return (
                <SRow key={index}>
                  <SDropdownItem
                    onClick={handleUpdate(index)}
                    canSelect={
                      (!disabled && !multipleLimitReached) ||
                      selectedIndexes.includes(index)
                    }
                    isSelected={selectedIndexes.includes(index)}
                  >
                    {typeof option === 'string'
                      ? option
                      : propertyToDisplay
                      ? option[propertyToDisplay]
                      : ''}
                  </SDropdownItem>
                </SRow>
              )
            })}
          </SDropdownList>
        </SDropdownListContainer>
      )}
    </SDropdownContainer>
  )
}

export default DropdownMenu
