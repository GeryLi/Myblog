import LfRequest from "..";

export function getEntireRoomList(offset=0,size=20){
    return LfRequest.get({
        url:'/entire/list',
        params:{
            offset,
            size 
        }
    })
}
