export type IChartTooltipProps = {
	active: boolean
	payload?: {
		payload: {
			difficulty: string
			count: number
			percentage: number
		}
	}[]
	label?: string
}
