import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { init, viewport } from '@tma.js/sdk'

init()

try {
	const promise = viewport.mount()
	await promise
} catch (err) {
	console.log(err)
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
