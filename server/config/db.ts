import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			'mongodb+srv://ivan1234:ivan1234@ivan.muwg1.mongodb.net/proshop?retryWrites=true&w=majority',
			{}
		)

		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		console.log(`error: ${error}`)
		process.exit(1)
	}
}

export default connectDB
