import Image from "next/image";
import Pesquisa from "./components/Pesquisa";
import ItemLivro from "./components/itemLivro";

async function getLivros() {
  const response = await fetch("http://localhost:3004/filmes")
  const dados = await response.json()
  return dados

}
export interface livroProps {
  id: number;
  titulo: string;
  genero: string;
  autor: string;
  preco: number;
  foto: string;
  
  

}
export default async function Home() {
  const livros = await getLivros()
  const listaLivros = livros.map((livro: livroProps) => (
    <ItemLivro key={livro.id} livro={livro} />
  ))

  return (
    <div className="max-w-7xl mx-auto">

      <h1 className="mt-3 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl white:text-dark">
        Faz o desing ae tonton:{" "}
        <span className="underline underline-offset-3 decoration-8 dark:decoration-orange-600">
          o baiano te ajuda
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">

      {listaLivros}
      </div>
    </div>
  );
}