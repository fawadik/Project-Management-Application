import Board, { BoardDocument } from '../models/Board'
import { NotFoundError } from '../helpers/apiError'

const createBoard = async (board: BoardDocument): Promise<BoardDocument> => {
  return board.save()
}

const findById = async (boardId: string): Promise<BoardDocument> => {
  const foundBoard = await Board.findById(boardId)

  if (!foundBoard) {
    throw new NotFoundError(`Board ${boardId} not found`)
  }

  return foundBoard
}

const findAll = async (): Promise<BoardDocument[]> => {
  return Board.find().sort({ name: 1, project: -1 })
}

const updateBoard = async (
  boardId: string,
  update: Partial<BoardDocument>
): Promise<BoardDocument | null> => {
  const foundBoard = await Board.findByIdAndUpdate(boardId, update, {
    new: true,
  })

  if (!foundBoard) {
    throw new NotFoundError(`Board ${boardId} not found`)
  }

  return foundBoard
}

const deleteBoard = async (boardId: string): Promise<BoardDocument | null> => {
  const foundBoard = Board.findByIdAndDelete(boardId)

  if (!foundBoard) {
    throw new NotFoundError(`Board ${boardId} not found`)
  }

  return foundBoard
}

export default {
  createBoard,
  findById,
  findAll,
  updateBoard,
  deleteBoard,
}
