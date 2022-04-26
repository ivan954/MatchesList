import express from 'express'

import bodyParser = require('body-parser')
import { tempData } from './temp-data'
import userRoutes from './routs/userRoutes'

const app = express()

const PORT = 8888

const PAGE_SIZE = 12

app.use(express.json())

app.use((_, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', '*')
	res.setHeader('Access-Control-Allow-Headers', '*')
	next()
})

app.use('/api/match', userRoutes)

app.get('/', (req, res) => {
	res.send('dev api status - up')
})
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

app.listen(PORT)
console.log('server running', PORT)
