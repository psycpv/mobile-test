import React, { useEffect, useState } from 'react'
import { AnimateCC } from 'react-adobe-animate'
import { AppState, useAppDispatch, useAppSelector } from 'state'
import { setCjsLoaded } from 'state/application/actions'
import LoadingDots from 'components/Loading/Dots'

/**
 * AnimationLoader Component
 * @param {string} name - Name of the animation that should be same as file.
 * @param {boolean} [paused] - Whether the animation should be initially paused.
 * @param {string} [composition] - Composition name for the Adobe Animate CC animation.
 * @param {React.CSSProperties} [style] - Additional styles for the container div.
 * @param {React.CSSProperties} [loadingStyle] - Additional styles for the loading
 * @param {string} [path] - Path to the animation script. Defaults to '/static/animations/'.
 * @param {number} [delay] - Delay before loading the animation script (in milliseconds).
 * @param {boolean} [showLoadingUntilNext] - Display loader or keep showing previous animation until the next animation is loaded.
 * @param {boolean} [preventDuplicateLoading] - Prevents loading the same animation script multiple times.
 * @param {function} onLoad - Handler that gets called whenever the animation is loaded.
 * @param {boolean} hasLoading - Whether the loading should be shown or not.
 * @returns {JSX.Element} - Rendered an Adobe JS Animation
 */
export default function AnimationLoader({
  name,
  paused,
  composition,
  style,
  loadingStyle,
  path,
  delay = 0,
  showLoadingUntilNext = false,
  preventDuplicateLoading = true,
  onLoad,
  hasLoading = true,
}: {
  name: string
  paused?: boolean
  composition?: string
  style?: React.CSSProperties
  loadingStyle?: React.CSSProperties
  path?: string
  delay?: number
  showLoadingUntilNext?: boolean
  preventDuplicateLoading?: boolean
  onLoad?: (animationName: string) => void
  hasLoading?: boolean
}): JSX.Element {
  const dispatch = useAppDispatch()
  const [isCreateJSLoaded, setIsCreateJSLoaded] = useState(
    useAppSelector((state: AppState) => {
      return state.application.isCjsLoaded
    })
  )
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false)
  const [loadedName, setLoadedName] = useState('')

  /**
   * Callback function triggered when the CreateJS script is loaded.
   */
  function onScriptLoaded() {
    dispatch(setCjsLoaded({ isLoaded: true }))
    setIsCreateJSLoaded(true)
  }

  // Load CreateJS script
  useEffect(() => {
    if (!isCreateJSLoaded) {
      const cjsScript = document.createElement('script')
      cjsScript.src = '/static/scripts/createjs.min.js'
      cjsScript.onload = onScriptLoaded
      document.body.appendChild(cjsScript)
      return () => {
        cjsScript.onload = null
        document.body.removeChild(cjsScript)
      }
    }
  }, [])

  // Load animation script
  useEffect(() => {
    if (showLoadingUntilNext) setIsAnimationLoaded(false)
    if (isCreateJSLoaded) {
      const animationPath = path ?? '/static/animations/'
      const animationScript = document.createElement('script')
      animationScript.src = animationPath + `${name}.js`

      const timeoutId = setTimeout(() => {
        if (preventDuplicateLoading && isScriptAdded(animationScript.src)) {
          setLoadedName(name)
          setIsAnimationLoaded(true)
          if (onLoad) onLoad(name)
        } else {
          animationScript.onload = () => {
            setLoadedName(name)
            setIsAnimationLoaded(true)
            if (onLoad) onLoad(name)
          }
          document.body.appendChild(animationScript)
        }
      }, delay)

      return () => {
        clearTimeout(timeoutId)
        if (animationScript.parentNode && animationScript.parentNode == document.body) {
          document.body.removeChild(animationScript)
        }
      }
    }
  }, [name, path, isCreateJSLoaded])

  // Render the component
  return (
    <>
      {isAnimationLoaded ? (
        <div style={style ?? { width: '100%' }}>
          <AnimateCC animationName={loadedName} paused={paused ?? false} composition={composition ?? undefined} />
        </div>
      ) : (
        hasLoading && <LoadingDots style={loadingStyle} />
      )}
    </>
  )
}

/**
 * Checks if a script with a given source is already added to the document.
 * @param {string} scriptSrc - Source URL of the script.
 * @returns {boolean} - Whether the script is already added or not.
 */
function isScriptAdded(scriptSrc: string): boolean {
  const scripts = document.querySelectorAll('script')
  for (const script of scripts) {
    if (script.src.includes(scriptSrc)) {
      return true
    }
  }
  return false
}
