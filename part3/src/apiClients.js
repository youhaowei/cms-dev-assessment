

const getApiUrl = (category) => {
    return `https://sv-reqres.now.sh/api/${category}?per_page=20`;
}

export const loadData = (category) => {
    return fetch(getApiUrl(category)).then(response => {
        return response.json();
    });
}