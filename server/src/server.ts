import express from 'express';
import { PrismaClient } from "@prisma/client"

const app = express();
const prisma = new PrismaClient({
  log: ['query'] // forma de dar um console.log no prisma
});

// listar games com número de anúncios
app.get('/games', async (request, response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  });
  return response.json(games);
})

// criar anúncios
app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

// listar anúncios por game
app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hoursEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return response.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(',')
    }
  }))
})

// buscar discord pelo ID do anúncio
app.get('/ads/:id/discord', (request, response) => {
  // const adsId = request.params.id

  return response.json([])
})

app.listen(3333)