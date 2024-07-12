import { FaPhoneAlt, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contacts() {
  return (
    <section className="bg-[--power__black] py-24">
      <div className="container px-8 sm:px-12 lg:px-16">
        <div className="lg:flex lg:items-center space-y-12">
          <div className="lg:w-1/2">
            <div className="w-full px-8 py-10 overflow-hidden bg-[--nightBlack] rounded-2xl shadow-lg">
              <h1 className="text-lg font-medium text-[--subtitle]">
                Mande um email
              </h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-[--textColor]">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-[--textColor] bg-[--nightBlack] placeholder-[--textColor] border border-[#999]/20 rounded-xl outline-none"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-[--textColor]">
                    Mensagem
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-3 mt-2 text-[--textColor] placeholder-[--textColor] bg-[--nightBlack] border border-[#999]/20 rounded-xl resize-none md:h-48 outline-none"
                    placeholder="Mensagem"
                  ></textarea>
                </div>

                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white rounded-xl bg-[--color-theme] capitalize transition-colors duration-300 transform">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col items-start lg:items-center gap-6">
            <h1 className="text-3xl text-[--subtitle] text-center font-semibold sm:text-4xl">
              Contatos
            </h1>

            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="size-5 text-[--color-theme]" />

                <span className="text-[--textColor] truncate">
                  (11) 91449-4438
                </span>
              </p>

              <p className="flex items-center gap-2">
                <IoMdMail className="size-5 text-[--color-theme]" />

                <span className="text-[--textColor] truncate">
                  pedrobrazdevs@gmail.com
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-[--textColor]">Siga-nos</h3>

              <div className="flex mt-4 gap-3 items-center">
                <a
                  className="text-[--textColor] transition-colors duration-300 transform hover:text-[--color-theme]"
                  href="#"
                >
                  <FaInstagram className="size-6" />
                </a>
                <a
                  className="text-[--textColor] transition-colors duration-300 transform hover:text-[--color-theme]"
                  href="#"
                >
                  <FaGithub className="size-[21px]" />
                </a>
                <a
                  className="text-[--textColor] transition-colors duration-300 transform hover:text-[--color-theme]"
                  href="#"
                >
                  <FaLinkedinIn className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
