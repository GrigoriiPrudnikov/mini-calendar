import { hapticFeedback } from '@tma.js/sdk'
import './App.css'

function App() {
	return (
		<main className='h-screen w-screen pt-48'>
			<div className='h-full w-full bg-red-500'>test</div>
			<button
				className='bg-blue-500 text-white px-4 py-2 rounded-md'
				onClick={() => hapticFeedback.impactOccurred('heavy')}
			>
				Click me
			</button>
		</main>
	)
}

export default App
