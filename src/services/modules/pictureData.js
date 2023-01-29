import LfRequest from "..";

export function getPictureRoomList(skyitem = 0, limit = 20) {
    return LfRequest.get({
        url: '/images/all',
        params: {
            skyitem,
            limit
        }
    })
}
