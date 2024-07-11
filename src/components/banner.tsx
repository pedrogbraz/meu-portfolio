export default function Banner() {
  return (
    <>
      <main className="w-[100%] h-[100vh] flex flex-col px-8 gap-8 sm:px-12 lg:px-16 justify-center">
        <h1 className="text-[8vw] lg:text-[6vw] leading-[1.04] font-semibold lg:w-[70%]">
          Olá, eu sou Pedro Gontijo Braz.
        </h1>
        <p className="text-[1.125rem] text-[--textColor] lg:w-[55%]">
          Como desenvolvedor <b className="font-semibold">front-end</b>, me
          destaco em criar{" "}
          <b className="font-semibold">
            soluções inovadoras que impulsionam o sucesso dos projetos.
          </b>{" "}
          Meu foco está em criar experiências digitais{" "}
          <b className="font-semibold">dinâmicas</b> e{" "}
          <b className="font-semibold">visualmente atraentes</b>, priorizando a{" "}
          <b className="font-semibold">colaboração</b> e a{" "}
          <b className="font-semibold">comunicação</b> para garantir resultados
          excepcionais.
        </p>
        <div className="flex gap-4">
          <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm hover:scale-[1.03] text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
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
