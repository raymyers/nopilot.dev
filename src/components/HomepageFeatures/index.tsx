import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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

function Feature({title, Svg, description}: FeatureItem) {
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
        <div className="row">
          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
          <div className={clsx('col col--6')}>
            <div className="text--center">
              {/* <Svg className={styles.featureSvg} role="img" /> */}
            </div>
            <div className="text--center padding-horiz--md" style={{fontSize: "1.1em"}}>
              <Heading as="h3">Why we are here</Heading>
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
             
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/IM5oi2ycNIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Timeline</Heading>
            <ul style={{textAlign: 'left', fontSize: "1.4em"}}>
              <li><strong>2022-03-29:</strong> GitHub Copilot general availability</li>
              <li><strong>2023-03-14:</strong> GPT-4 Released</li>
              <li><strong>2024-03-12:</strong> Devin autonomous coder announced<br/>13.8% SWE-bench sample</li>
              <li><strong>2024-03-14:</strong> Claude 3 Opus released</li>
              <li><strong>2024-03-16:</strong> "Can we beat Devin?" Discord reaches 1,000 members</li>
              <li><strong>2024-03-26:</strong> OpenDevin reaches 5,000 GitHub stars</li>
              <li><strong>2024-04-01:</strong> Princeton NLP matches Devin <br/>SWE-agent, 12.29% SWE-bench</li>
              <li><strong>2024-04-08:</strong> <strong><u>Devin has been beaten</u></strong><br/>AutoCodeRover, National University of Singapore</li>
            </ul>
            </div>
          </div>
          
        </div>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/IM5oi2ycNIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
       
      </div>
    </section>
  );
}
