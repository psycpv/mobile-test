import { Id, toast, ToastContainer as Toast } from 'react-toastify'
import styled from 'styled-components'
import PopupItem from './PopupItem'
import 'react-toastify/dist/ReactToastify.css'

export const toaster = (myProps: any, toastProps: any): Id => toast(<PopupItem content={myProps} />, { ...toastProps })

toaster.success = (myProps: any, toastProps: any): Id =>
  toast.success(<PopupItem content={myProps} />, { ...toastProps })
toaster.error = (myProps: any, toastProps: any): Id => toast.error(<PopupItem content={myProps} />, { ...toastProps })
toaster.info = (myProps: any, toastProps: any): Id => toast.info(<PopupItem content={myProps} />, { ...toastProps })

export const ToastContainer = styled(Toast)`
  --toastify-icon-color-error: ${({ theme }) => theme.pink};
  --toastify-icon-color-success: ${({ theme }) => theme.green};
  --toastify-icon-color-info: ${({ theme }) => theme.blue};
  --toastify-text-color-light: ${({ theme }) => theme.almostWhite};

  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background: ${({ theme }) => theme.color1};
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
  .Toastify__progress-bar--warning {
    background: ${({ theme }) => theme.blue};
  }
  .Toastify__progress-bar--error {
    background: ${({ theme }) => theme.pink};
  }
  .Toastify__close-button {
    color: ${({ theme }) => theme.almostWhite};
  }
  .Toastify__toast-icon {
  }
`
