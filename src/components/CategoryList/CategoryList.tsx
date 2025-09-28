import type { QuestionsType } from '../../services/types'
import { CategoryListItem } from '../../shared/components/CategoryListItem/CategoryListItem'
import { WrapperSection } from '../../shared/components/WrapperSection/WrapperSection'
import { CATEGORIES } from '../../shared/utils/constants'
import { getUniqueTitles } from '../../shared/utils/getUniqueTitles'

export const CategoryList = ({ items }: { items: QuestionsType[] }) => {
	const titles = getUniqueTitles(items)

	return (
		<WrapperSection title={CATEGORIES}>
			<ul className='grid w-full gap-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 xl:grid-cols-2'>
				{titles.map(title => (
					<CategoryListItem key={title} categoryTitle={title} />
				))}
			</ul>
		</WrapperSection>
	)
}
