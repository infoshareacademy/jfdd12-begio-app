export function mapObjectToArray(obj) {
    const entries = Object.entries(obj)
    const arr = entries.map(entry => {
        const [key, value] = entry
        return {
            id: key,
            ...value
        }
    })
    return arr
}
