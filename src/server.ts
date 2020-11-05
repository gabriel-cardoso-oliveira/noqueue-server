import express from 'express'
import path from 'path'
import cors from 'cors'
import routes from './routes'
import PasswordsControllers from './controllers/PasswordsController'
import { errors } from 'celebrate'

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const passwordsControllers = new PasswordsControllers()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

interface Passwords {
  code: string;
  status: string;
  sector: string;
  date: string;
  hour: string;
  start: string;
  end: string;
  unit_id: number;
}

io.on('connection', (socket: any) => {
  console.log(`Connection ${socket.id}`)

  async function receivedPassword() {
    const passwords = await passwordsControllers.countPassword()

    socket.broadcast.emit('receivedPassword', passwords);
  }

  socket.on('issuePassword', async (data: Passwords) => {
    const passwordId = await passwordsControllers.create(data)

    if (passwordId) receivedPassword();
  })
  
  socket.on('startPassword', async (data: Passwords) => {
    const passwordId = await passwordsControllers.update(data)

    if (passwordId) receivedPassword();
  })
  
  socket.on('closePassword', async (data: Passwords) => {
    const passwordId = await passwordsControllers.update(data)

    if (passwordId) receivedPassword();
  })
})

app.use(errors())
server.listen(3333)