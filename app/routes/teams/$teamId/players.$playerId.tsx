import { useOutletContext, useParams } from "remix"

import { team }  from "../../teams"
import { player } from "../../teams"



function PlayerDetails() {

  const team = useOutletContext() as team

  const { playerId } = useParams()

  const player:player = team.players[parseInt(playerId as string)-1]

  

  return (
    <div>
      Player Details
      <h3>Name: { player.name }</h3>
      <h4>Position: { player.position || "Not specified"}</h4>
      <p>Age: { player.age || "Unknown" }</p>
    </div>
    
  )
}

export default PlayerDetails