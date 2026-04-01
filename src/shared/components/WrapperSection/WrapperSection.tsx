import { type ReactNode } from 'react'

export const WrapperSection = ({
	children,
	title,
	wrapperClassname,
	childrenClassname
}: {
	children: ReactNode
	title: string
	wrapperClassname?: string
	childrenClassname?: string
}) => {
	return (
		<div className={`w-full rounded-lg p-8 bg-secondary ${wrapperClassname}`}>
			<div className='text-xl font-bold text-primary mb-6'>{title}</div>
			<div className={childrenClassname}>{children}</div>
		</div>
	)
}
