import express from 'express'

import {
  createBoard,
  findById,
  deleteBoard,
  findAll,
  updateBoard,
} from '../controllers/board'

const router = express.Router()

// Every path we define here will get /api/v1/boards prefix
router.get('/', findAll)
router.get('/:boardId', findById)
router.put('/:boardId', updateBoard)
router.delete('/:boardId', deleteBoard)
router.post('/', createBoard)

export default router
