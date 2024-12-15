import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center w-full max-w-6xl px-4 py-4 mx-auto my-0 sm:my-4">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Skills</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Experiences</MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <ModeToggle />
    </div>
  );
}