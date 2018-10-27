

const getApiUrl = (source) => {
    return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=1df5d9c08ff84cc4a54c09b9179bd4ff`;
}

export const loadData = (source) => {
    return fetch(getApiUrl(source)).then(response => {
        return response.json();
    });
}