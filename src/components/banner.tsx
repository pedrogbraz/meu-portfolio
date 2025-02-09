import { IoCheckmarkDone } from "react-icons/io5";

export default function Banner() {
  return (
    <>
      <main className="w-[100%] h-[100vh] flex flex-col gap-8 px-8 sm:px-16 lg:px-28 justify-center">
        <h1 className="text-[8vw] lg:text-[5vw] leading-[1.04] text-[--subtitle] font-semibold lg:w-[60%]">
          Olá, eu sou Pedro Gontijo Braz.
        </h1>
        <p className="text-[1.125rem] text-[--textColor] lg:w-[55%]">
          Como desenvolvedor <b className="font-medium">front-end</b>, me
          destaco em criar{" "}
          <b className="font-medium">
            soluções inovadoras que impulsionam o sucesso dos projetos.
          </b>{" "}
          Meu foco está em criar experiências digitais{" "}
          <b className="font-medium">dinâmicas</b> e{" "}
          <b className="font-medium">visualmente atraentes</b>, priorizando a{" "}
          <b className="font-medium">colaboração</b> e a{" "}
          <b className="font-medium">comunicação</b> para garantir resultados
          excepcionais.
        </p>
        <div className="flex flex-col items-start md:flex-row md:items-center gap-5">
          <span className="flex items-center gap-1 text-[--textColor]"><IoCheckmarkDone className="text-green-500 size-5" />CLT/PJ/Freelancer</span>
          <span className="flex items-center gap-1 text-[--textColor]"><IoCheckmarkDone className="text-green-500 size-5" />Disponível para projetos</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="inline-flex items-center px-5 py-3 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-500 duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 mr-2 -ml-1"
            >
              <path
                d="M12 4v12m8-8l-8 8-8-8"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
            Download CV
          </a>
        </div>
      </main>
    </>
  );
}
