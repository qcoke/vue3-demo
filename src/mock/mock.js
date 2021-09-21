import { Random } from 'mockjs';

var Mock = require('mockjs')

const userList = () => {
    let data = [];
    for(let i=0,icount=10;i<icount;i++){
        data.push(Mock.mock({
            'id|1-100': [{
                'id': "@guid",
                'name': Random.cname(),
                'website': Random.url(),
                'email': Random.email(),
                'age': Random.natural(18,100)
            }]
        }))
    }
    return formatData(data);
}

function formatData(dataList) {
    return {
        success: true,
        message: "",
        data: dataList
    }
}

export default {
    userList
}