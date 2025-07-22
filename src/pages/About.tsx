export default function About() {
  return (
    <section className="sectionapropos">
      <img className="profil" src="/images/IMG_7588.jpg" alt="profil" />
      <article className="apropos">
        <h1>À propos de moi</h1>
        <p>
          Ne vous fiez pas à mon portfolio{" "}
          <strong className="height">sobre</strong>, mon univers est résolument{" "}
          <span className="rainbow rainbow_text_animated">coloré</span> à
          l'image de ma personnalité dynamique et enthousiaste.
          <p>
            Ingénieure packaging de formation, avec une sensibilité marquée pour
            le <strong className="height">graphisme</strong> et l’esthétique
            visuelle, j’ai choisi de me reconvertir dans un domaine qui conjugue
            rigueur technique, créativité et apprentissage continu :{" "}
            <strong>le développement web</strong>.
          </p>
          <p>
            Lors de ma formation à la Wild Code School, j’ai exploré les aspects
            du front-end comme du back-end, en consolidant des bases solides
            pour construire des applications fonctionnelles et modernes.
          </p>{" "}
          <strong className="height">Curieuse et passionnée</strong>, je suis
          toujours prête à relever de nouveaux défis. Mon parcours m’a dotée de
          solides compétences en gestion de projet, en compréhension de besoins
          clients, en analyse, en rédaction de cahiers des charges, et en
          travail collaboratif — autant d’atouts que je mets aujourd’hui au
          service de projets digitaux. Je cherche à créer des projets qui ont du
          sens, à résoudre des problèmes de manière logique et à collaborer dans
          des environnements dynamiques, tout en gardant une grande autonomie
          dans mon travail.
        </p>
        <a
          className="download"
          href="/images/CV_dev_web_anais_cieslar.pdf"
          download
        >
          Télécharger mon CV
        </a>
      </article>
    </section>
  );
}
