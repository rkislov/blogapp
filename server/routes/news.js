const express = require('express')
const router = express.Router()

const fakeNews = [
    {
        id: '1',
        title: 'Первая статья',
        teaser: 'Первая запись',
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi architecto at consequatur delectus distinctio dolore doloribus ea est, ex excepturi in, ipsum neque nobis nostrum nulla odio rerum saepe tempora vel velit veritatis voluptates voluptatibus voluptatum? A assumenda atque beatae dolorem error laborum optio placeat quis quod recusandae.`
    },
    {
        id: '2',
        title: 'Вторая статья',
        teaser: 'Вторая запись',
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi architecto at consequatur delectus distinctio dolore doloribus ea est, ex excepturi in, ipsum neque nobis nostrum nulla odio rerum saepe tempora vel velit veritatis voluptates voluptatibus voluptatum? A assumenda atque beatae dolorem error laborum optio placeat quis quod recusandae.`
    },
    {
        id: '3',
        title: 'Третья статья',
        teaser: 'Третья запись',
        body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi architecto at consequatur delectus distinctio dolore doloribus ea est, ex excepturi in, ipsum neque nobis nostrum nulla odio rerum saepe tempora vel velit veritatis voluptates voluptatibus voluptatum? A assumenda atque beatae dolorem error laborum optio placeat quis quod recusandae.`
    }
]

router.get('/', (req,res,next) =>{
    res.status(200).send({
        data: fakeNews
    })
})

router.get('/:id', (req,res,next) => {
    const id = req.params.id

    const picked = fakeNews.find(o => o.id === id)

    res.status(200).send({
        data:picked
    })
})

module.exports = router