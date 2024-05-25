
export default function Leaderboard(props): JSX.Element {
    const { compact } = props;
    let i = 1;
    return (<div>
  <table>
    <tr>
      <th>Rank</th>
      <th>Agent</th>
      <th>Score</th>
      <th>Score (lite)</th>
      <th>Status</th>
      { compact || <th>Group</th> }
      { compact || <th>License</th> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://aider.chat/2024/05/22/swe-bench-lite.html">Aider</a><br/> + GPT-4o + Opus</td>
      <td>-</td>
      <td>26.3%</td>
      <td>Reported</td>
      { compact || <td>Paul Gauthier</td> }
      { compact || <td>Apache-2</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://x.com/gneubig/status/1791498953709752405">OpenDevin CodeAct 1.3</a><br />+ GPT-4o</td>
      <td>-</td>
      <td>25%</td>
      <td>Reported</td>
      { compact || <td>OpenDevin</td> }
      { compact || <td>MIT</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://github.com/sweepai/sweep">Sweep</a></td>
      <td>15.7%</td>
      <td>-</td>
      <td>Reported<br/>(10% sample)</td>
      { compact || <td>Sweep AI</td> }
      { compact || <td>Proprietary<br/>(Source Available)</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://press.aboutamazon.com/2024/4/aws-announces-general-availability-of-amazon-q-the-most-capable-generative-ai-powered-assistant-for-accelerating-software-development-and-leveraging-companies-internal-data">Q Developer Agent</a></td>
      <td>13.82</td>
      <td>20.33</td>
      <td>Official</td>
      { compact || <td>Amazon</td> }
      { compact || <td>Proprietary</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td>Devin</td>
      <td>13.48%</td>
      <td>-</td>
      <td>Reported<br/>(25% sample)</td>
      { compact || <td>Cognition</td> }
      { compact || <td>Proprietary</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://swe-agent.com/">SWE-agent</a><br/> + GPT-4</td>
      <td>12.47%</td>
      <td>18%</td>
      <td>Official</td>
      { compact || <td>Princeton NLP</td> }
      { compact || <td>MIT</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://github.com/nus-apr/auto-code-rover">auto-code-rover</a></td>
      <td>10.59%</td>
      <td>16.11%</td>
      <td>Reported<br/>(Average of runs)</td>
      { compact || <td>APR@NUS</td> }
      { compact || <td>GPL-3</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://twitter.com/aegucer/status/1780319507845988538">Fume</a></td>
      <td>-</td>
      <td>18.3%</td>
      <td>Reported<br/>(5% sample)</td>
      { compact || <td>Fume Technologies</td> }
      { compact || <td>Proprietary</td> }
    </tr>
  </table>
  <p><i>Last updated: 2024-05-25</i></p>
</div>)
}