export const getBeers = async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');

    if (response.status === 200) {
        return await response.json();
    }
    return null;
}
