import abyssCardDark from "@/assets/img/abyss-card-front-dark.png";
import abyssCardLight from "@/assets/img/abyss-card-front-light.png";
import kiizuhaMeDark from "@/assets/img/kiizuha-me-front-dark.png";
import kiizuhaMeLight from "@/assets/img/kiizuha-me-front-light.png";
import loreDaemon1 from "@/assets/img/lore-daemon-1.png";
import loreDaemon2 from "@/assets/img/lore-daemon-2.png";
import loreDaemon3 from "@/assets/img/lore-daemon-3.png";


type ProjectsType = {
  name: string
  description: string
  imageSrc: string[]
  demoLink: string
  repoLink: string
}


export default [
  {
    name: "Portofolio-me",
    description: "My personal website",
    imageSrc: [kiizuhaMeDark.src, kiizuhaMeLight.src],
    demoLink: "https://portofolio-me-wine.vercel.app",
    repoLink: "https://whatsapp.com/channel/0029VaX3jOgAe5VguykGye3k"
  },
  {
    name: "Spotify-ritz",
    description: "A spotify project, this project is for my independent learning of NextJS, TypeScript, TailwindCSS for 1 month since it started. This project is still unfinished and abandoned for the time being.",
    imageSrc: [abyssCardDark.src, abyssCardLight.src],
    demoLink: "https://ritz-dev.vercel.app",
    repoLink: "https://whatsapp.com/channel/0029VaX3jOgAe5VguykGye3k"
  },
  {
    name: "bot whatsapp",
    description: "
Whatsapp Bot Project, this project can help you in finding photo/video/audio information. This project is also equipped with AI and GPT chat.",
    imageSrc: [loreDaemon1.src, loreDaemon2.src, loreDaemon3.src],
    demoLink: "https://chat.whatsapp.com/B8pXE5442MWKJmYibDtr0F",
    repoLink: "https://whatsapp.com/channel/0029VaX3jOgAe5VguykGye3k"
  },

] as ProjectsType[];
