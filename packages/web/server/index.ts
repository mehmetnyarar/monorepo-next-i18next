import express from 'express'
import next from 'next'
import nextI18nextMiddleware from 'next-i18next/middleware'

import nextI18next from '@app/i18n/next'

const port = parseInt(process.env.PORT || '3000', 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(async () => {
  const server = express()

  server.use(nextI18nextMiddleware(nextI18next))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
