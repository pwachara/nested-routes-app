import { Link, Outlet, useOutletContext, useParams } from "remix"
import { team } from "../teams"
import { player } from "../teams"

export default function TeamDetail() {

    const teams = useOutletContext() as team[]

    const { teamId } = useParams()

    const team = teams[ parseInt(teamId as string) - 1]

  return (
    <div style={{color: "whitesmoke"}}>
            <h1>
                { team.name }
            </h1>
            <div style={{display: "grid", width: "100vw", gridTemplateColumns: "1fr 3fr", columnGap: "30px"}}>
                <div>
                    { team?.players.map((player:player) => (
                        <div key={player.id}>
                            <Link to={`/teams/${team.id}/players/${player.id}`}>
                                { player.name}
                            </Link>
                        </div>
                    ))}
                </div>

                <div style={{ background: "orange", padding: 20, }}>
                    <Outlet context={team}/>
                </div>

            </div>

        <Link to={'/teams'}>Back</Link>
        
    </div>
  )
}
