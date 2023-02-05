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
