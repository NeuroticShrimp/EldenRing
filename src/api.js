const apiUrl = "https://eldenring.fanapis.com/api"

export default async function fetchDataFromApi(path) {
    const endpoint = window.encodeURI(
        `${apiUrl}${path}`
    );

    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if (!data) {
                throw new Error("fetch error");
            }
            return data;
        });
}
