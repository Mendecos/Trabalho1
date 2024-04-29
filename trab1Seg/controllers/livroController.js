//import { Op } from "sequelize"
import { Livro } from "../models/Livro.js"

export async function livroIndex(req, res) {
  try {
    const livros = await Livro.findAll({
      where: {id: true},
      order: [['id', 'desc']]
    })
    res.status(200).json(livros)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroCreate(req, res) {
  const { titulo, genero, autor, preco, foto, sinopse } = req.body

  if (!titulo || !genero|| !autor || !preco || !foto || !sinopse) {
    res.status(400).json("Erro... Informe titulo, genero, duracao, preco, foto, sinopse")
    return
  }

  try {
    const livro = await Livro.create({
      titulo, genero, autor, preco, foto, sinopse
    })
    res.status(201).json(livro)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroUpdate(req, res) {

  const { id } = req.params

  const { titulo, genero, autor, preco, foto, sinopse } = req.body

  if (!titulo || !genero|| !autor || !preco || !foto || !sinopse) {
    res.status(400).json("Erro... Informe titulo, genero, autor, preco, foto, sinopse")
    return
  }

  try {
    const livro = await Livro.update({
      titulo, genero, autor, preco, foto, sinopse
    },
      {
        where: { id }
      })
    res.status(200).json(livro)
  } catch (error) {
    res.status(400).send(error)
  }
}

export async function livroDelete(req, res) {

  const { id } = req.params

  try {
    await livro.destroy({
      where: { id }
    })

    res.status(200).json({ msg: "Ok! Livro removido com sucesso" })
  } catch (error) {
    res.status(400).send(error)
  }
}

