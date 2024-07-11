import { FaReact, FaNodeJs, FaCheck, FaMobileAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { IoFlash, IoInvertMode } from "react-icons/io5";
import { MdAutoGraph } from "react-icons/md";

export default function Pontos() {
  return (
    <section>
      <div className="px-8 sm:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:justify-between">
          <div className="mx-auto max-w-lg text-center lg:text-start lg:mx-0">
            <h2 className="text-3xl font-bold sm:text-4xl">
              O que não pode faltar
            </h2>

            <p className="mt-4 text-[--textColor]">
              Para criar um site perfeito, é essencial considerar a otimização,
              um bom visual, segurança e responsividade. Em meus projetos, todos
              esses elementos são sempre priorizados.
            </p>

            <a
              href="/projetos"
              className="mt-6 inline-block rounded-full text-[--color-theme] text-sm font-medium text-white transition focus:outline-none"
            >
              Ver alguns projetos <span>&gt;</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="block rounded-xl hover:scale-[1.02] border border-[#999]/20 p-4 shadow-sm hover:border-yellow-400 focus:outline-none focus:ring duration-200">
              <span className="inline-block rounded-xl shadow-lg bg-yellow-200/80 p-2">
                <IoFlash className="text-yellow-400 size-8" />
              </span>

              <h2 className="mt-2 font-semibold">Otimizado</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-[--textColor]">
                Desenvolver um site exige uma plataforma atraente e rápida.
              </p>
            </div>
            <div className="block rounded-xl hover:scale-[1.02] border border-[#999]/20 p-4 shadow-sm hover:border-blue-700 focus:outline-none focus:ring duration-200">
              <span className="inline-block rounded-xl shadow-lg bg-blue-300/80 p-2">
                <MdAutoGraph className="text-blue-700 size-8" />
              </span>

              <h2 className="mt-2 font-semibold">Visual Moderno</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-[--textColor]">
                Desenvolver um site exige um visual moderno.
              </p>
            </div>
            <div className="block rounded-xl hover:scale-[1.02] border border-[#999]/20 p-4 shadow-sm hover:border-green-500 focus:outline-none focus:ring duration-200">
              <span className="inline-block rounded-xl shadow-lg bg-green-200/80 p-2">
                <FaCheck className="text-green-500 size-8" />
              </span>

              <h2 className="mt-2 font-semibold">Seguro</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-[--textColor]">
                Desenvolver um site exige segurança.
              </p>
            </div>
            <div className="block rounded-xl hover:scale-[1.02] border border-[#999]/20 p-4 shadow-sm hover:border-pink-500 focus:outline-none focus:ring duration-200">
              <span className="inline-block rounded-xl shadow-lg bg-pink-200/80 p-2">
                <FaMobileAlt className="text-pink-500 size-8" />
              </span>

              <h2 className="mt-2 font-semibold">Responsivo</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-[--textColor]">
                Desenvolver um site exige responsividade.
              </p>
            </div>
            <div className="block rounded-xl hover:scale-[1.02] border border-[#999]/20 p-4 shadow-sm hover:border-slate-800 focus:outline-none focus:ring duration-200">
              <span className="inline-block rounded-xl shadow-lg bg-slate-400/80 p-2">
                <IoInvertMode className="text-slate-800 size-8" />
              </span>

              <h2 className="mt-2 font-semibold">Dark Mode</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-[--textColor]">
                Desenvolver um site exige modo escuro.
              </p>
            </div>
            <div className="block rounded-xl hover:scale-[1.02] border border-[#999]/20 p-4 shadow-sm hover:border-red-700 focus:outline-none focus:ring duration-200">
              <span className="inline-block rounded-xl shadow-lg bg-red-300/80 p-2">
                <IoInvertMode className="text-red-700 size-8" />
              </span>

              <h2 className="mt-2 font-semibold">Escalavél</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-[--textColor]">
                Priorizo escalabilidade em meus projetos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
