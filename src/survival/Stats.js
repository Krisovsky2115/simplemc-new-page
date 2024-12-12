export default function Stats() { 
    
    const stats = {
        topKil: [
            "Player 1",
            "Player 2",
            "Player 3",
            "Player 4",
            "Player 5"
        ],
        topTime: [
            "Player 1",
            "Player 2",
            "Player 3",
            "Player 4",
            "Player 5"
        ]
    }
    
    return (
        <div>
            <h1>Stats</h1>

            {stats.topKil.map((player, index) => (
                <div key={index}>
                    <h2>Top Kill</h2>
                    <p>{player}</p>
                </div>
            ))}

        </div>
    )
}