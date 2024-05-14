import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Leaderboard from '../Leaderboard';
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row">
          <div className={clsx('col col--12')}>
            <p>
              We are witnessing the rise of Autonomous DevTools. Help ensure that change is for the better!
            </p>
          </div>
        </div> */}
        <div className="row">
          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
          <div className={clsx('col col--6')}>
            <div className="">
              {/* <Svg className={styles.featureSvg} role="img" /> */}
            </div>
            <div className="padding-horiz--md" style={{ fontSize: "1.1em" }}>
              <Heading as="h2" className="text--left">Mission: Shape the future of software in the open</Heading>
              <p>
                We believe it is in the best interest of the software industry, which the world depends on, to deem certain types of tools as essential infrastructure.
              </p>
              <p>
                We consider it vital that all essential infrastructure continue to have strong Open Source solutions available.
              </p>
              <p>
                We predict a near future where Autonomous DevTools such as Coding Agents will be considered essential infrastructure.
              </p>
              <p>
                Therefore, we promote the creation and maintenance of near state-of-the-art Autonomous DevTools, published as Open Source, in healthy competition with their proprietary counterparts.
              </p>
              {/* <p>
                As always, Open Source implies the Four Freedoms
              <ol start={0}>
                <li>The freedom to run the program as you wish, for any purpose.</li>
                <li>The freedom to study how the program works, and change it.</li>
                <li>The freedom to redistribute exact copies.</li>
                <li>The freedom to distribute modified copies, contributing to the community.</li>
              </ol>
              </p> */}
            </div>
          </div>
          <div className={clsx('col col--6')} style={{ fontSize: "1.2em" }}>
            <div className="padding-horiz--md">
              <Heading as="h2">Get started</Heading>
              <ul>
                <li><a href="https://mender.ai/docs/learn/ai-skills">Learn about AI</a></li>
                <li><a href="https://www.gnu.org/philosophy/free-sw.en.html">Learn about Open Source</a></li>
                <li><a href="https://www.davefarley.net/?p=352">Learn about Software Engineering</a></li>
                <li><a href="/contributing">Join the effort!</a></li>
              </ul>
              <p>
                With patience, the most tangled cord may be undone
                <br />
                - Lao Tzu
              </p>
            </div>
          </div>

        </div>
        <div className="row">
          {/* <div className={clsx('col col--6')}>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Timeline</Heading>
              
            </div>
          </div> */}
          <div className={clsx('col col--6')}>
            <div className="padding-horiz--md">
              <Heading as="h2">Updates</Heading>
              <div>
                <ul>
                  <li><a href="https://www.youtube.com/watch?v=Ko-R3MtTpWQ">Reading of SWE-agent paper</a></li>
                  <li><a href="/blog/dissecting-devin">Blog: Dissecting Devin</a></li>
                </ul>
              </div>
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aKrjE7NKfw8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              
            </div>
          </div>
          <div className={clsx('col col--6')} style={{ fontSize: "1.0em" }}>
            <div className="padding-horiz--md">
              <Heading as="h2">SWE-bench leaderboard</Heading>
              <a href="/leaderboards">More on leaderboards page</a>
              <div style={{marginLeft: "auto", marginRight: "auto"}}>
                <Leaderboard compact={true} />
              </div>
              
            </div>           
          </div>
          {/* <div className={clsx('col col-2')}></div> */}
        </div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/IM5oi2ycNIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

      </div>
    </section>
  );
}
