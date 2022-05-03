import express from 'express'
import bodyParser = require('body-parser')
import matchesRoutes from './routs/matchesRoutes'
import sectionsRouter from './routs/sectionsRouter'
import lablesRouter from './routs/lablesRouter'

const app = express()

const PORT = 8888

app.use(express.json())

app.use((_, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', '*')
	res.setHeader('Access-Control-Allow-Headers', '*')
	next()
})

app.use('/api/match', matchesRoutes)
app.use('/api/match/', sectionsRouter)
app.use('/api/match/', lablesRouter)

app.get('/', (req, res) => {
	res.send('dev api status - up')
})

app.listen(PORT)
console.log('server running', PORT)

//const PAGE_SIZE = 12
// app.get("/api/match", (req, res) => {

//   //default page is 1
//   const page = Number(req.query.page) || 1;

//   //getting  first page and last
//   const startIndex = (Number(page) - 1) * PAGE_SIZE
//   const endIndex =  page * PAGE_SIZE

//   // gives everything between
//   const paginatedData = tempData.slice(startIndex, endIndex);

//   res.send(paginatedData);
// });
