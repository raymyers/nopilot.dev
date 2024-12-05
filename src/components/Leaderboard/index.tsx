
export default function Leaderboard(props): JSX.Element {
    const { compact } = props;
    const showGroup = true;
    const showLicense = !compact;
    const leaderboardData = [

      {
        name: "OpenHands + CodeAct v2.1",
        subtitle: "(claude-3-5-sonnet-20241022)",
        url: "https://docs.all-hands.dev/",
        score: "53.00%",
        group: "OpenHands",
        license: "MIT"
      },
      {
        name: "Agentless-1.5",
        subtitle: "+ Claude-3.5 Sonnet (20241022)",
        url: "https://github.com/OpenAutoCoder/Agentless",
        score: "50.80%",
        group: "Agentless",
        license: "MIT"
      },
      {
        name: "Composio SWE-Kit",
        subtitle: "(2024-10-25)",
        url: "https://github.com/ComposioHQ/composio/tree/master/python/swe/agent",
        score: "48.60%",
        group: "Composio",
        license: "Source Available (ELv2)"
      },
      {
        name: "AppMap Navie v2",
        subtitle: "",
        url: "https://appmap.io/navie",
        score: "47.20%",
        group: "AppMap",
        license: "Source Available"
      },
      {
        name: "AutoCodeRover-v2.0",
        subtitle: "(Claude-3.5-Sonnet-20241022)",
        url: "https://www.autocoderover.net/",
        score: "46.20%",
        group: "AutoCodeRover",
        license: "Source Available"
      },
      {
        name: "Moatless Tools",
        subtitle: "+ Claude 3.5 Sonnet (20241022)",
        url: "https://github.com/aorwall/moatless-tools",
        score: "~45%",
        group: "Albert Örwall",
        license: "MIT"
      },
      {
        name: "SWE-agent",
        subtitle: "+ Claude 3.5 Sonnet",
        url: "https://swe-agent.com/",
        score: "33.60%",
        group: "Princeton NLP",
        license: "MIT"
      },
    ];

  return (
    <div>
      <table>
        <tr>
          <th>Rank</th>
          <th>Agent</th>
          <th>Score (verified)</th>
          { showGroup && <th>Group</th> }
          { showLicense && <th>License</th> }
        </tr>
        {leaderboardData.map((data, index) => 
          <tr key={index}>
            <td>{index+1}</td>
            <td>
              <a href={data.url}>{data.name}</a>
              {data.subtitle && <span><br />{data.subtitle}</span>}
            </td>
            <td>{data.score}</td>
            { showGroup && <td>{data.group}</td> }
            { showLicense && <td>{data.license}</td> }
          </tr>
        )}
      </table>
      <p><i>Last updated: 2024-11-24</i></p>
    </div>
  );
}