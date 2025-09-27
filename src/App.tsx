import { useEffect, useState } from 'react'
import { CategoryList } from './components/CategoryList/CategoryList'
import { fetchData } from './services/fetchData'
import type { QuestionsType } from './services/types'

function App() {
	const [data, setData] = useState<QuestionsType[]>([])

	useEffect(() => {
		fetchData(10).then(data => {
			setData(data)
		})
	}, [])
	return (
		<>
			<CategoryList items={data} />
			{/* <QuestionChartByDifficulty />
			<QuestionChartByCategory /> */}
		</>
	)
}

export default App
