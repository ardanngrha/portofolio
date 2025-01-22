import { FaCodeBranch } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
      <div className="flex flex-col items-center gap-2">
        <p>
          This website is built using{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tailwind CSS
          </a>
          ,{" "}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            shadcn/ui
          </a>
          ,{" "}
          <a
            href="https://www.npmjs.com/package/framer-motion"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Framer Motion
          </a>
          , and deployed to{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Vercel.
          </a>
        </p>
        <div className="flex items-center gap-2">
          © {new Date().getFullYear()} Ardan Nugraha
          <a
            href="https://github.com/ArdanKR/portofolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            <FaCodeBranch /> GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
};