import accueil from "../../assets/videos/accueil.mp4";
import candidat from "../../assets/videos/candidat.mp4";
import consultant from "../../assets/videos/consultant.mp4";
import entreprise from "../../assets/videos/entreprise.mp4";
import recruteur from "../../assets/videos/recruteur.mp4";
import candidatLike from "../../assets/videos/candidat-like.mp4";

const videos3 = [
  { id: 1, name: "Accueil", video: accueil },
  { id: 2, name: "Candidat.e", video: candidat },
  { id: 3, name: "Entreprise", video: entreprise },
  { id: 4, name: "Recruteur.euse", video: recruteur },
  { id: 5, name: "Consultant.e", video: consultant },
  { id: 6, name: "Candidat.e-Like", video: candidatLike },
];

const ProjectsArray = [
  {
    id: 1,
    name: "bass music",
    theme: "Musique",
    description: (
      <p>
        Mon premier site est un projet dans lequel j'ai présenté différents
        échantillons de musique drum n' bass et dubstep, accompagnés d'une
        sélection de collectifs locaux qui organisent des événements musicaux
        dans ma ville. L'objectif était de mettre en valeur ces genres de
        musique sous-estimés et de partager mon amour pour eux.
      </p>
    ),
    hardSkillName: ["HTML5 ", "CSS3 ", "Git "],
    link: "https://brrrrrbrrrr.github.io/Project_1-Wild-Code-School/",
    img: "",
  },
  {
    id: 2,
    name: "feel motion",
    theme: "Film",
    description: (
      <p>
        Nous avons travaillé en équipe sur un projet qui impliquait
        l'utilisation d'une API REST. Nous avons choisi TheMovieDatabase pour
        créer un site qui offre une sélection de films en fonction de l'émotion
        que l'utilisateur souhaite ressentir. L'interface est simple et
        interactive pour une expérience utilisateur optimale.
      </p>
    ),
    hardSkillName: ["React ", "Git ", "Postman "],
    link: "https://harmonious-tarsier-de5f7a.netlify.app/",
    img: "",
  },
  {
    id: 3,
    name: "externatic",
    theme: "Recrutement",
    description: (
      <p>
        J'ai travailler avec une équipe sur un projet visant à créer un site de
        recrutement dans le domaine de l'informatique. Nous avons développé la
        partie front-end et back-end, en répondant aux exigences spécifiques du
        cahier des charges. Le site comprend des fonctionnalités telles qu'une
        messagerie intégrée, un système d'authentification et de notification,
        la gestion de profils, et bien plus encore. J'ai été enthousiasmé par
        l'opportunité de travailler sur ce projet complexe et ambitieux, et je
        suis ravi de voir le produit final en action.
      </p>
    ),
    hardSkillName: ["React ", "Express", "MySQL "],
    link: "videos",
    img: "",
    videos: videos3,
  },
];
export default ProjectsArray;
