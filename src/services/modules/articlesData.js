import LfRequest from "..";

export function getArticlesData(skyitem, limit) {
    return LfRequest.get({
        url: "/articles/all",
        params: {
            skyitem,
            limit
        }
    })
}

export function getArticlesByID(id) {
    return LfRequest.get({
        url: `articles/${id}`
    })
}

export function getArticlesByRendom() {
    return LfRequest.get({
        url: '/articles/randomart'
    })
}

export function searchArticleByTitle(data) {

    return LfRequest.post({
        url: '/articles/all',
        data: { ...data },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}
