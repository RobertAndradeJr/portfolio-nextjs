import Layout from '../components/layout';
import styles from '../styles/resume.module.scss';

export default function Resume() {
  return (
    <Layout>
      <article className={`${styles.resume} ${styles.paper}`} itemScope itemType="http://schema.org/Person">

        <header className={styles.title}>
          <h1 itemProp="name" className={styles.name}>S. Roberto<br />Andrade</h1>
          <h2 itemProp="jobTitle" className={styles['job-title']}>Creative Technologist</h2>
          <meta itemProp="alternateName" content="Robert Andrade" />
          <meta itemProp="alternateName" content="Sergio Andrade" />
          <meta itemProp="gender" content="Non-binary" />
          <meta itemProp="pronouns" content="he/her/theirs" />
        </header>

        <section className={`${styles.objective} ${styles.header}`}>
          <h3 className={styles.heading}>Objective</h3>
          <p>Product Design focused front-end developer currently creating user-centric experiences using Vue.js, JavaScript, and Node. I enjoy working in cross-functional teams with product managers and designers to create design systems which are accessible, modular, extensible, and engaging. Passionate about prototyping to push products to their maximum potential incorporating design principles and modern development practices. Driven to create memorable experiences for the user.</p>
        </section>

        <section className={styles.education}>
          <h3 className={styles.heading}>Education</h3>

          <details open>
            <summary>
              <h4 className={styles.degree}>
                <span itemProp="degree">French Language<br />&amp; Literature</span>,<br /><span itemProp="degree">American History</span>
              </h4>
              <span itemProp="alumniOf" itemScope itemType="http://schema.org/EducationalOrganization">
                <h5 itemProp="name" className={styles.organization}>University of Minnesota</h5>
              </span>
              <time className={styles.date}>2010 - 2014</time>
            </summary>
            <p>Bachelor's Program focusing on Post World War II American History and French Linguistics</p>
          </details>

          <details open>
            <summary>
              <h4 className={styles.degree}>
                Full-Stack Engineering
              </h4>
              <span itemProp="alumniOf" itemScope itemType="http://schema.org/EducationalOrganization">
                <h5 itemProp="name" className={styles.organization}>Prime Digital Academy</h5>
              </span>
              <time className={styles.date}>2018</time>
            </summary>
            <p>Full time full stack full engineering full course</p>
          </details>
        </section>

        <section className={`${styles.experience} ${styles.header}`}>
          <h3 className={`${styles['experience-title']} ${styles.heading}`}>Experience</h3>

          <div className={styles['experience-list']}>
            <details open>
              <summary>
                <span itemProp="worksFor" itemScope itemType="http://schema.org/Oragnization">
                  <h5 className={styles.organization} itemProp="name">Wiley</h5>
                </span>
                <h4 itemProp="jobTitle" className={styles['job-title']}>Creative Technologist</h4>
                <time className={styles.date}>2019 - Present</time>
              </summary>
              <p itemProp="description">
                Led front-end architecture of digital transformation of flagship product, Everything DiSC® on Catalyst™. Catalyst.everythingdisc.com helped over 100k users within the first year. Co-led implementation of design system across digital products. Consulted on design system for Dummies.com. Created code-based reusable prototypes with an emphasis on user experience and accessibility.
                <br />Technologies: Vue.js, JavaScript, Tailwind CSS, Sass, Storybook, Vite, Adobe XD
              </p>
            </details>

            <details open>
              <summary>
                <span itemScope itemType="http://schema.org/Oragnization">
                  <h5 className={styles.organization} itemProp="name">Constellation Mutual</h5>
                </span>
                <h4 className={styles['job-title']} itemProp="jobTitle">DevOps Product Engineer</h4>
                <time className={styles.date}>2019</time>
              </summary>
              <p itemProp="description">
                Product DevOps Engineer Constellation Mutual, Minneapolis MN
                Helped lay foundation for SaaS platform to connect physicians with insurance agents. Technologies: Figma, React, AWS, and Jenkins
              </p>
            </details>

            <details open>
              <summary>
                <span itemScope itemType="http://schema.org/Oragnization">
                  <h5 className={styles.organization} itemProp="name">Riley</h5>
                </span>
                <h4 itemProp="jobTitle" className={styles['job-title']}>Software Engineer</h4>
                <time className={styles.date}>2018 - 2019</time>
              </summary>
              <p itemProp="description">
                Developed product pages, advertising banners, and HTML emails to generate campaigns for clients such as Best Buy, Delta Airlines, and Three Rivers Parks to reach millions of users. Technologies: Laravel, React, HTML, and Vue.js
              </p>
            </details>
          </div>

        </section>

        <section className={`${styles.skills} ${styles.header}`}>
          <h3 className={styles.heading}>Skills</h3>
          <details className='skills-category Front End' open>
            <summary>
              <span itemProp="skills">
                <h6 itemProp="name">Front End</h6>
              </span>
            </summary>
            <ul itemProp="skills">
              <li itemProp="name">JavaScript</li>
              <li itemProp="name">HTML</li>
              <li itemProp="name">CSS</li>
              <li itemProp="name">Vue.js</li>
              <li itemProp="name">Node.js</li>
              <li itemProp="name">React</li>
              <li itemProp="name">Jamstack</li>
              <li itemProp="name">Serverless</li>
              <li itemProp="name">Git</li>
            </ul>
          </details>

          <details className='skills-category design' open>
            <summary>
              <span itemProp="skills">
                <h6 itemProp="name">Design</h6>
              </span>
            </summary>
            <ul itemProp="skills">
              <li itemProp="name">Design Systems</li>
              <li itemProp="name">Interaction Design</li>
              <li itemProp="name">Motion Design</li>
              <li itemProp="name">Visual Design</li>
              <li itemProp="name">Human Centered Design</li>
              <li itemProp="name">Accessibility</li>
            </ul>
          </details>

          <details className="skills-category tools" open>
            <summary>
              <span >
                <h6>Tools</h6>
              </span>
            </summary>
            <ul itemProp="skills">
              <li itemProp="name">Figma</li>
              <li itemProp="name">Sketch</li>
              <li itemProp="name">Adobe XD</li>
              <li itemProp="name">Storybook</li>
              <li itemProp="name">Adobe Illustrator</li>
              <li itemProp="name">JIRA</li>
              <li itemProp="name">Agile</li>
              <li itemProp="name">Kanban</li>
            </ul>
          </details>
        </section>

        <section className={`${styles.interests} ${styles.header}`}>
          <h3 className={styles.heading}>Interests</h3>
          <ul>
            <li>
              Reading
            </li>
            <li>
              Music
            </li>
            <li>
              Video Games
            </li>
            <li>
              Hiking
            </li>
            <li>
              Museums
            </li>
            <li>
              Hairless Dogs
            </li>
          </ul>
        </section>

        <section className={`${styles.contact} ${styles.header}`}>
          <h3 className={styles.heading}>Contact</h3>
          <ul className="contact-list">
            <li><a href="https://robertandradejr.dev/" target="_blank" itemProp="url">Website: https://robertandradejr.dev/</a></li>
            <li><a href="mailto:ROBERT.ANDRADE.DEVELOPER@GMAIL.COM" target="_blank" itemProp="email">email: robert.andrade.developer@gmail.com</a></li>
            <li><a href="https://github.com/RobertAndradeJr" itemProp="sameAs">Github: https://github.com/RobertAndradeJr</a></li>
            <li><a href="https://twitter.com/abstract_coding" itemProp="sameAs">Twitter: abstract_coding</a></li>
            <li><a href="https://www.linkedin.com/in/srobertandrade" itemProp="sameAs">LinkedIn: SRobertAndrade</a></li>
            <li className={styles['print-only']}><span itemProp="telephone">(763) 501-9532</span></li>
          </ul>
        </section>
      </article>
      <a href="/resume.pdf" className="download-link">Download PDF</a>
    </Layout>
  )
}