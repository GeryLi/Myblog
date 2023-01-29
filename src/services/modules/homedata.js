import LfRequest from "..";

export function getHomePriceData(){
    return LfRequest.get({
        url:'/home/goodprice'
    })
}

export function getHomeHightScoreData(){
    return LfRequest.get({
        url:'/home/highscore'
    })
}

export function getDiscountData(){
    return LfRequest.get({
        url:'/home/discount'
    })
}
export function getRecommendData(){
    return LfRequest.get({
        url:'/home/hotrecommenddest'
    })
}
export function getWantToDoData(){
    return LfRequest.get({
        url:'/home/longfor'
    })
}