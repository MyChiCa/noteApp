const apiList = require("./apiList");
const moment = require("../lib/moment.min")
let post = (url,data)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url,
            data,
            success:(data)=>{
                resolve(data)
            },
            fail:(e)=>{
                reject(e)
            },
            header:{ 
                'content-type': 'application/json'
                // 'content-type':'application/x-www-form-urlencoded'
            },
            method:"POST"
        })
    })
};
let api = {};
for(let key  in apiList){
    api[key] = (data = {}) => {
        return post(apiList[key].url,{
            "userId":"12345455",
            "timestamp":moment().format("X")*1,
            "data":data
        })
    }
}
console.log(api,apiList)
module.exports = api