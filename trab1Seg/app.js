import express from 'express'
import cors from 'cors'
import { sequelize } from './database/conecta.js'
import { Livro } from './models/Livro.js'
import routes from './routes.js'


const app = express()
const port = 3004

app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
  res.send('Sistema de Controle de Livros')
})

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com Banco de Dados realizada com Sucesso');
    await Livro.sync({alter: true})      // cria a tabela no banco (se não existir)
    console.log("Tabela de Livros: Ok")
  } catch (error) {
    console.error('Erro ao conectar o banco de dados:', error);
  }  
}
conecta_db()

app.listen(port, () => {
  console.log(`API de Livros Rodando na Porta: ${port}`)
})