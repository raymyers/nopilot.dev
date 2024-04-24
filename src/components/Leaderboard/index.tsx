
export default function Leaderboard(props): JSX.Element {
    const { compact } = props;
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
      <td>1</td>
      <td><a href="https://twitter.com/aegucer/status/1780319507845988538">Fume</a></td>
      <td>18.3%</td>
      <td>-</td>
      <td>Reported (5% sample)</td>
      { compact || <td>Fume Technologies</td> }
      { compact || <td>Proprietary</td> }
    </tr>
    <tr>
      <td>2</td>
      <td><a href="https://github.com/nus-apr/auto-code-rover">auto-code-rover</a></td>
      <td>15.95%</td>
      <td>22.3%</td>
      <td>Reported</td>
      { compact || <td>APR@NUS</td> }
      { compact || <td>GPL-3</td> }
    </tr>
    <tr>
      <td>3</td>
      <td>Devin</td>
      <td>13.48%</td>
      <td>-</td>
      <td>Reported (25% sample)</td>
      { compact || <td>Cognition</td> }
      { compact || <td>Proprietary</td> }
    </tr>
    <tr>
      <td>4</td>
      <td><a href="https://swe-agent.com/">SWE-agent</a> + GPT 4</td>
      <td>12.29%</td>
      <td>17%</td>
      <td>Official</td>
      { compact || <td>Princeton NLP</td> }
      { compact || <td>MIT</td> }
    </tr>
  </table>
  <p><i>Last checked: 2024-04-16</i></p>
</div>)
}