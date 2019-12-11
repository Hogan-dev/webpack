const Mock = require('mockjs');
const Random = Mock.Random;

Mock.mock('/api/data', (req, res) => {
    let list = [];
    for(let i = 0; i < Random.natural(1,100); i++) {
        let listObject = {
            key: Random.natural(1,100),
            firstName:Random.first(),
            lastName: Random.last(),
            cName: Random.cname(),
            age: Random.natural(1,100),
            address: Random.region() +  " " + Random.city(true)
        }
        list.push(listObject);
    }
    return {
        list: list
    }
})