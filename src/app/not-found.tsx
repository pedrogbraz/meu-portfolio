export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-[--power__black] px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-[--color-theme] sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-[--textColor]">Não conseguimos encontrar essa página.</p>

        <a
          href="/"
          className="mt-6 inline-block rounded bg-[--color-theme] px-5 py-3 text-sm font-medium text-white hover:bg-[--color-theme-hover] duration-200 focus:outline-none focus:ring"
        >
          Voltar para página inicial
        </a>
      </div>
    </div>
  );
}
