// react
import { MutableRefObject, useEffect, useRef } from 'react'

export default function useOutsideClick(
  element: MutableRefObject<any>,
  callback: () => void,
  container?: boolean
) {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    const ref = container ? 'body' : '#body'
    const handler = (event: any) => {
      const path = event.path || (event.composedPath && event.composedPath())

      if (!path.includes(element.current)) callbackRef.current()
    }

    document.querySelector(ref)?.addEventListener('click', handler)

    return () =>
      document.querySelector(ref)?.removeEventListener('click', handler)
  }, [callbackRef, container, element])
}
