import { useEffect } from 'react'

export function useCloseWithEscape(onDismiss: () => void, isModal?: boolean) {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === 'Escape' && !isModal) {
        onDismiss()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModal, onDismiss])
}
