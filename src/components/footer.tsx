export default function Footer() {
  return (
    <footer className="bg-[--color-white] border-[#999]/20 border-t px-8 sm:px-16 lg:px-28 py-8 rounded-2xl">
      <div className="mx-auto max-w-screen-xl">

        <div className="border-[#999]/20">
          <p className="text-center text-sm/relaxed text-[--textColor]">
          © 2024 <a className="hover:text-[--color-theme] duration-300" href="/">Pedro Gontijo Braz</a>
            <br />
            Todos os direitos reservados. Elevando sua experiencia digital.
          </p>
        </div>
      </div>
    </footer>
  );
}
