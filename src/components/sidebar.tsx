import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { BsLayoutSidebarReverse } from "react-icons/bs";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger
        className="md:hidden rounded-[8px] border-[--textColor] text-[--textColor]"
        asChild
      >
        <Button
          className="rounded-[8px] border-[--textColor] text-[--textColor]"
          variant="outline"
          size="icon"
        >
          <BsLayoutSidebarReverse className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[--color-white] border-none">
        <SheetHeader>
          <SheetTitle className="py-4"><h1 className="font-bold text-xl text-[--textColor]">PGB</h1></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col border-t border-[#999]/20 py-4 gap-2">
          <h1 className="font-semibold">Sobre</h1>
          <div className="flex flex-col gap-1 px-5">
            <a className="text-[--textColor] hover:translate-x-1 duration-300" href="/sobre-mim">Sobre mim</a>
            <a className="text-[--textColor] hover:translate-x-1 duration-300" href="/sobre-mim">Projetos</a>
          </div>
        </div>
        <div className="flex flex-col border-t border-[#999]/20 py-4 gap-2">
          <h1 className="font-semibold">Setups</h1>
          <div className="flex flex-col gap-1 px-5">
            <a className="text-[--textColor] hover:translate-x-1 duration-300" href="/sobre-mim">Tecnologias</a>
            <a className="text-[--textColor] hover:translate-x-1 duration-300" href="/sobre-mim">Hardwares</a>
            <a className="text-[--textColor] hover:translate-x-1 duration-300" href="/sobre-mim">Periféricos</a>
          </div>
        </div>
        <div className="flex flex-col border-t border-[#999]/20 py-4 gap-2">
          <h1 className="font-semibold">Startup</h1>
          <div className="flex flex-col gap-1 px-5">
            <a className="text-[--textColor] hover:translate-x-1 duration-300" href="/sobre-mim">Ver mais</a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
