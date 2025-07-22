import 'animate.css';

export default function Home () {

    return (
 <>
    <section className="top">
        <div>
            <h1>Bonjour, moi c'est Anaïs</h1>
            <p>Développeur Web junior en recherche d'alternance pour le mois d'Octobre 2025 😉</p>
            <a className="contact_btn" href="mailto:anais.cieslar@gmail.com">
                <span className="text">Me contacter</span>
                <span className="line -right"></span>
                <span className="line -top"></span>
                <span className="line -left"></span>
                <span className="line -bottom"></span>
            </a> 
            <div className="picto">
                <a href="https://github.com/anacslr" target="_blank"><img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="github" /></a>
                <a href="https://www.linkedin.com/in/anaïs-cieslar-0a988574" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="github" /></a>
            </div>    
        </div>
        <img className="top_avatar" src="/images/avatar_anais.png" alt="avatar" />
    </section>
    <p className="presentation"><strong>Ce que je recherche : une alternance de 18 mois à partir d’octobre 2025, où je pourrai continuer à grandir en tant que conceptrice développeuse tout en apportant ma touche créative, mon sens du détail et mon énergie positive à une équipe passionnée.</strong> </p>
    <h2>Ma stack technique</h2>
    <section className="stack" >
        <img className="stack_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
        <img className="stack_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
        <img className="stack_icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
        <img className="stack_icon" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg" alt="React" />
        <img className="stack_icon" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-plain-wordmark.svg" alt="node" />
        <img className="stack_icon" src="https://img.icons8.com/ios7/512/FFFFFF/express-js.png" alt="express" />
        <img className="stack_icon" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original-wordmark.svg" alt="mySQL" />
        <img className="stack_icon" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-plain-wordmark.svg" alt="git" />
        <img className="stack_icon" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png" alt="github" />
        <img className="stack_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Adobe_Illustrator_Icon_%28CS6%29.svg/1200px-Adobe_Illustrator_Icon_%28CS6%29.svg.png" alt="illustrator" />
    </section>
    </>


    )
   
}