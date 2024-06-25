
export default function Leaderboard(props): JSX.Element {
    const { compact } = props;
    const showGroup = true;
    const showLicense = !compact;
    const showStatus = !compact;
    const leaderboardData = [

      {
        name: "Moatless Tools",
        subtitle: "+ Claude 3.5 Sonnet",
        url: "https://github.com/aorwall/moatless-tools",
        score: "-",
        scoreLite: "26.67%",
        status: "Verified",
        group: "Albert Örwall",
        license: "MIT"
      },
      {
        name: "OpenDevin CodeAct 1.3",
        subtitle: "+ GPT-4o",
        url: "https://x.com/gneubig/status/1791498953709752405",
        score: "-",
        scoreLite: "26.67%",
        status: "Reported",
        group: "OpenDevin",
        license: "MIT"
      },
      {
        name: "Aider",
        subtitle: "+ GPT-4o, Claude 3 Opus",
        url: "https://aider.chat/2024/05/22/swe-bench-lite.html",
        score: "-",
        scoreLite: "26.33%",
        status: "Reported",
        group: "Paul Gauthier",
        license: "Apache-2"
      },
      {
        name: "AppMap Navie",
        subtitle: "+ GPT-4o",
        url: "https://appmap.io/navie",
        score: "-",
        scoreLite: "21.67%",
        status: "Reported",
        group: "AppMap",
        license: "Source Available"
      },
      {
        name: "SWE-agent",
        subtitle: "+ GPT-4",
        url: "https://swe-agent.com/",
        score: "12.47%",
        scoreLite: "18%",
        status: "Verified",
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
          <th>Score (lite)</th>
          { showStatus && <th>Status</th> }
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
            <td>{data.scoreLite}</td>
            { showStatus && <td>{data.status}</td> }
            { showGroup && <td>{data.group}</td> }
            { showLicense && <td>{data.license}</td> }
          </tr>
        )}
      </table>
      <p><i>Last updated: 2024-06-25</i></p>
    </div>
  );
}