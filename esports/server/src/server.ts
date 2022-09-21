import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

/*
    - Query
    - Route
    - Body
*/

//mostrar games
app.get('/games', (request, response) => {
    return response.json([]);
});

//criar ads
app.post('/ads', (request, response) => {
    return response.status(201).json([]);
});

//mostrar ads
app.get('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;

    return response.send(gameId);

})

//mostrar discord
app.get('/ads/:id/discord', (request, response) => {
    const adId = request.params.id;

    return response.send(adId);

})

app.listen(3333)