
export async function getETHPrice() {
    console.log(process.env.REACT_APP_BASE_URL)
    const response = await fetch(process.env.REACT_APP_BASE_URL + '/fetchETHPrice', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    return await response.json()
}