import LfRequest from "..";

export function getImageData(skyitem = 0, limit = 12) {
    return LfRequest.get({
        url: '/images/all',
        params: {
            skyitem,
            limit
        }
    })
}

export function getImageRondomData() {
    return LfRequest.get({
        url: '/images/allimg'
    })
}


