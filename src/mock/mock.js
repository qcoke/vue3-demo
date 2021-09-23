import Mock from 'mockjs';

const userList = () => {
    let mockData = [];
    for(let i=0,icount=10;i<icount;i++) {
        mockData.push({
            'id': "@guid",
            'name': Mock.Random.cname(),
            'website': Mock.Random.url(),
            'email': Mock.Random.email(),
            'age': Mock.Random.natural(18,100)
        })
    }
    return formatData(mockData);
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