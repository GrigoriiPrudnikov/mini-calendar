import { useEffect, useState } from 'react'
import { viewport } from '@tma.js/sdk'
import './App.css'

function App() {
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [safeAreaInsets, setSafeAreaInsets] = useState({
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	})

	useEffect(() => {
		const updateInsets = () => {
			setIsFullscreen(viewport.isFullscreen())
			setSafeAreaInsets({
				top: viewport.contentSafeAreaInsetTop(),
				bottom: viewport.contentSafeAreaInsetBottom(),
				left: viewport.contentSafeAreaInsetLeft(),
				right: viewport.contentSafeAreaInsetRight()
			})
		}

		// Initial update
		updateInsets()

		viewport.stableHeight.sub(() => {
			updateInsets()
		})

		return () => {
			viewport.stableHeight.unsubAll()
		}
	}, [])

	const mainStyle: React.CSSProperties = {
		paddingTop: safeAreaInsets.top,
		paddingBottom: safeAreaInsets.bottom,
		paddingLeft: safeAreaInsets.left,
		paddingRight: safeAreaInsets.right,
		height: '100vh',
		width: '100vw'
	}

	return (
		<main style={mainStyle} className='bg-black'>
			<div className='text-white'>
				{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}
				Top: {safeAreaInsets.top}px, Bottom: {safeAreaInsets.bottom}px, Left:{' '}
				{safeAreaInsets.left}px, Right: {safeAreaInsets.right}px
			</div>
			<div className='h-full w-full text-white border-t-red-500 border-t-2'>
				test2
			</div>
		</main>
	)
}

export default App
