const apiUrl = "https://eldenring.fanapis.com/"

export default function fetchDataFromApi(path) {
    const endpoint = window.encodeURI(
        `${apiUrl}${path}`
    );

    return fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
            if (!data.items) {
                throw new Error(data.message);
            }

            return data.items;
        });
}
