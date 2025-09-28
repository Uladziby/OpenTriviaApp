export const CategoryListItem = ({
	categoryTitle
}: {
	categoryTitle: string
}) => {
	return (
		<li className='cursor-pointer list-none border-white border-2 rounded-lg hover:bg-primary bg-secondary-light'>
			<span className='grid h-12 w-full place-items-center text-white text-sm hover:shadow-md text-p'>
				{categoryTitle}
			</span>
		</li>
	)
}
