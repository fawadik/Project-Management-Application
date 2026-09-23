/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
  name: string
  firstName: string
  lastName: string
  email: string
  picture: string
  board : string[]
  role: string
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: { String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
     tyepe: String,
  },
  board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
  },
  role : {
     tyepe: String,
     default: 'user'
  }
})

export default mongoose.model<UserDocument>('User', userSchema)
