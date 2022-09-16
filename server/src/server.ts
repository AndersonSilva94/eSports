import express from 'express';

const app = express();

// listar games com número de anúncios
app.get('/games', (request, response) => {
  return response.json([])
})

// criar anúncios
app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

// listar anúncios por game
app.get('/games/:id/ads', (request, response) => {
  // const gameId = request.params.id

  return response.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
  ])
})

// buscar discord pelo ID do anúncio
app.get('/ads/:id/discord', (request, response) => {
  // const adsId = request.params.id

  return response.json([])
})

app.listen(3333)