import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <article className="description-about-container">
        <div className="description-column">
          <div className="texte-container">
            <p className="p-content p-content-1">
              Je m'appelle Benjamin, et je suis un développeur web junior en
              reconversion professionnelle.
            </p>
            <p className="p-content p-content-2">
              En tant qu'ancien joueur compétitif, j'ai appris à optimiser mon
              matériel pour atteindre des performances optimales dans les jeux.
              Cette passion m'a appris l'importance de la persévérance et de la
              résolution de problèmes, ce qui s'est avéré être une compétence
              précieuse dans le monde de la programmation. J'ai ainsi toujours
              atteint les résultats que je visais.
            </p>

            <p className="p-content p-content-3">
              J'ai découvert ma passion pour le développement web lors de ma
              reconversion professionnelle. Attiré par l'idée de pouvoir
              travailler dans ce domaine sans avoir besoin d'un diplôme, j'ai
              suivi la formation certifiante "Développement Web Full-Stack" de
              la Wild Code School. J'y ai acquis une expérience précieuse en
              développement front-end (React) et back-end (Node/Express), et
              j'ai été captivé par la possibilité de coder pour créer des sites
              web et des applications unique et fonctionnelle.
            </p>

            <p className="p-content p-content-4">
              En tant qu'ancien manager en restauration rapide, j'ai acquis une
              gamme de compétences techniques et personnelles qui sont
              transférables au développement web. Mon souci du détail et mon
              engagement à fournir un code propre et bien structuré sont des
              atouts que je considère essentiels dans le monde dynamique et
              rapide du développement web. Je suis impatient de continuer à
              apprendre et à grandir en tant que développeur, et je suis heureux
              de vous présenter certains des projets sur lesquels j'ai
              travaillé.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default About;
