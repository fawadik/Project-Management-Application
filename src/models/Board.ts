/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type BoardDocument = Document & {
  name: string
  user: string[]
  project: string[]
}

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
})

export default mongoose.model<BoardDocument>('Board', boardSchema)
