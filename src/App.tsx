import { useEffect, useState } from 'react'
import { CategoryList } from './components/CategoryList/CategoryList'
import { fetchData } from './services/fetchData'
import type { QuestionsType } from './services/types'
import { QuestionsChartByDifficulty } from './components/QuestionsChartByDifficulty/QuestionsChartByDifficulty'

function App() {
	const [data, setData] = useState<QuestionsType[]>([])

	useEffect(() => {
		fetchData(10).then(data => {
			setData(data)
		})
	}, [])
	return (
		<div className='container mx-auto my-10 flex flex-col gap-10'>
			<CategoryList items={data} />
			<QuestionsChartByDifficulty items={data} />
			{/*
			<QuestionChartByCategory /> */}
		</div>
	)
}

export default App
