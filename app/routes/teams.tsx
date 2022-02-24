import { Link, Outlet } from "remix";

export type player = {
    id: number,
    name: string,
    age?: number,
    position?:string
}

export type team = {
    id: number,
    name: string,
    players: player[]
}

export default function Teams() {

    const teams:team[] = [
        {
            id:1,
            name: "Arsenal Football Club",
            players: [
                {
                    id:1,
                    name: "Bukayo Saka",
                    age:19,
                    position:"Right Wing"
                },
                {
                    id:2,
                    name: "Emile Smith Rowe",
                    age: 20,
                    position: "Centre Forward"
                },
                {
                    id:3,
                    name: "Nicola Pepe",
                    age: 30,
                    position: "Right Wing"
                },
                {
                    id:4,
                    name: "Aaron Armsdale",
                    age: 23,
                    position: "Goal"
                },
                {
                    id:5,
                    name: "Thomas Partey",
                    age: 27,
                    position: "Central Midfield"
                },
            ]
        },
        {
            id:2,
            name: "Liverpool Football Club",
            players: [
                {
                    id:1,
                    name: "Mohammed Salah",
                    age: 29,
                    position: "Right Wing"
                },
                {
                    id:2,
                    name: "Sadio Mane",
                    age: 30,
                    position: "Left Wing"
                },
            ]
        },
        {
            id:3,
            name: "Manchester United Football Club",
            players: [
                {
                    id:1,
                    name: "Christiano Ronaldo",
                    age: 37,
                    position: "Striker"
                },
                {
                    id:2,
                    name: "Paul Pogba",
                    age: 31,
                    position: "Midfield"
                },
                {
                    id:3,
                    name: "Bruno Fernandez",
                    age: 26,
                    position: "Forward"
                },

            ]
        }
    ]

    return (
        <div style={{display: "grid", width: "100vw", gridTemplateColumns: "1fr 3fr", columnGap: "30px"}}>

            
                <div style={{minHeight: "100vh", minWidth: "30vh"}}>
                    <h1>TEAMS</h1>
                    <div style={{background: "lightgrey", padding:16, minHeight: "100vh", marginBottom: "50px"}}>
                    {teams?.map((team: any) => (
                        <div key={team.id}>
                            <Link to={`/teams/${team.id}`}>
                            { team.name }
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>
                <div>
                    <h3>Selected Team: </h3>
                    <Outlet context={ teams}/>
                </div>
            
        </div>
    )
  }