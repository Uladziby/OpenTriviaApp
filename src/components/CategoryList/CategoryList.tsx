import type { QuestionsType } from '../../services/types'
import { CategoryListItem } from '../../shared/components/CategoryListItem/CategoryListItem'
import { WrapperSection } from '../../shared/components/WrapperSection/WrapperSection'
import { CATEGORIES } from '../../shared/utils/constants'
import { getUniqueTitles } from '../../shared/utils/getUniqueTitles'

export const CategoryList = ({ items }: { items: QuestionsType[] }) => {
	const titles = getUniqueTitles(items)

	return (
		<WrapperSection>
			<div className='grid items-center gap-4 rounded sm:grid-cols-1 lg:grid-cols-[70%_30%] '>
				<ul className='grid w-full gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2'>
					{titles.map(title => (
						<CategoryListItem key={title} categoryTitle={title} />
					))}
				</ul>
				<div className='text-primary break-keep py-12 text-2xl font-heavy text-center md:text-4xl lg:py-0  lg:text-4xl xl:text-6xl'>
					{CATEGORIES}
				</div>
			</div>
		</WrapperSection>
	)
}
