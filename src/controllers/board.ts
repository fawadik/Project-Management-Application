import { Request, Response, NextFunction } from 'express'

import Board from '../models/Board'
import BoardServices from '../services/board'
import { BadRequestError } from '../helpers/apiError'

// POST /boards
export const createBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, user, project} = req.body

    const board = new Board({
      name,
      user,
      project,
    })

    await BoardServices.createBoard(board)
    res.json(board)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// PUT /boards/:boardId
export const updateBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update = req.body
    const boardId = req.params.boardId
    const updateBoard = await BoardServices.updateBoard(boardId, update)
    res.json(updateBoard)
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// DELETE /boards/:boardId
export const deleteBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await BoardServices.deleteBoard(req.params.boardId)
    res.status(204).end()
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /boards/:boardId
export const findById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BoardServices.findById(req.params.boardId))
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}

// GET /boards
export const findAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await BoardServices.findAll())
  } catch (error) {
    if (error instanceof Error && error.name == 'ValidationError') {
      next(new BadRequestError('Invalid Request', error))
    } else {
      next(error)
    }
  }
}
