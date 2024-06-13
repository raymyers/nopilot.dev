
export default function Leaderboard(props): JSX.Element {
    const { compact } = props;
    const showGroup = true;
    const showLicense = !compact;
    const showStatus = !compact;
    let i = 1;
    return (<div>
  <table>
    <tr>
      <th>Rank</th>
      <th>Agent</th>
      <th>Score</th>
      <th>Score (lite)</th>
      { showStatus && <th>Status</th> }
      { showGroup && <th>Group</th> }
      { showLicense && <th>License</th> }
    </tr>
    
    <tr>
      <td>{i++}</td>
      <td><a href="https://github.com/NL2Code/CodeR">CodeR</a><br/> + GPT-4</td>
      <td>-</td>
      <td>28.33%</td>
      { showStatus && <td>Reported</td>}
      { showGroup && <td>NL2Code</td> }
      { showLicense && <td>Proprietary</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://github.com/swe-bench/experiments/tree/main/evaluation/lite/20240612_IBM_Research_Agent101">Agent-101</a></td>
      <td>-</td>
      <td>28.33%</td>
      { showStatus && <td>Reported</td> }
      { showGroup && <td>IBM Research</td> }
      { showLicense && <td>Proprietary</td> }
    </tr>
    
    <tr>
      <td>{i++}</td>
      <td><a href="https://aider.chat/2024/05/22/swe-bench-lite.html">Aider</a><br/> + GPT-4o + Opus</td>
      <td>-</td>
      <td>26.3%</td>
      { showStatus && <td>Reported</td> }
      { showGroup && <td>Paul Gauthier</td> }
      { showLicense && <td>Apache-2</td> }
    </tr>
    
    <tr>
      <td>{i++}</td>
      <td><a href="https://x.com/gneubig/status/1791498953709752405">OpenDevin CodeAct 1.3</a><br />+ GPT-4o</td>
      <td>-</td>
      <td>25%</td>
      { showStatus && <td>Reported</td> }
      { showGroup && <td>OpenDevin</td> }
      { showLicense && <td>MIT</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://github.com/aorwall/moatless-tools">Moatless Tools</a><br />+ GPT-4o</td>
      <td>-</td>
      <td>23.33%</td>
      { showStatus && <td>Verified</td> }
      { showGroup && <td>Albert Örwall</td> }
      { showLicense && <td>MIT</td> }
    </tr>
    
    <tr>
      <td>{i++}</td>
      <td><a href="https://github.com/sweepai/sweep">Sweep</a></td>
      <td>~ 15.7%</td>
      <td>-</td>
      { showStatus && <td>Reported<br/>10% sample</td> }
      { showGroup && <td>Sweep AI</td> }
      { showLicense && <td>Proprietary<br/>(Source Available)</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://press.aboutamazon.com/2024/4/aws-announces-general-availability-of-amazon-q-the-most-capable-generative-ai-powered-assistant-for-accelerating-software-development-and-leveraging-companies-internal-data">Q Developer Agent</a></td>
      <td>13.82</td>
      <td>20.33</td>
      { showStatus && <td>Reported</td> }
      { showGroup && <td>Amazon</td> }
      { showLicense && <td>Proprietary</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td>Devin</td>
      <td>~13.48%</td>
      <td>-</td>
      { showStatus && <td>Reported<br/>25% sample</td> }
      { showGroup && <td>Cognition</td> }
      { showLicense && <td>Proprietary</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://swe-agent.com/">SWE-agent</a><br/> + GPT-4</td>
      <td>12.47%</td>
      <td>18%</td>
      { showStatus && <td>Verified</td>}
      { showGroup && <td>Princeton NLP</td> }
      { showLicense && <td>MIT</td> }
    </tr>
    <tr>
      <td>{i++}</td>
      <td><a href="https://github.com/nus-apr/auto-code-rover">auto-code-rover</a><br/>+ GPT-4</td>
      <td>10.59%</td>
      <td>19%</td>
      { showStatus && <td>Reported<br/>(Average of runs)</td>}
      { showGroup && <td>APR@NUS</td> }
      { showLicense && <td>GPL-3</td> }
    </tr>
  </table>
  <p><i>Last updated: 2024-05-25</i></p>
</div>)
}