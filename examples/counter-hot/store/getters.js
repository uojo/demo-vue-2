export const limit = state => (state.limit+1)

export const count = state => state.count

export const recentHistory = state => {
	const {limit, history} = state
	const end = history.length

	const begin = end - limit < 0 ? 0 : end - limit
	return history
	.slice(begin, end)
	.toString()
	.replace(/,/g, ', ')
}
