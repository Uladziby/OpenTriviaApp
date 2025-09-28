import { type ReactNode } from 'react'

export const WrapperSection = ({
	children,
	title,
	classes
}: {
	children: ReactNode
	title: string
	classes?: string
}) => {
	return (
		<div className='w-full rounded-lg border-white p-8 bg-secondary border-2'>
			<div className='text-xl font-bold text-primary'>{title}</div>
			<div className={classes}>{children}</div>
		</div>
	)
}
