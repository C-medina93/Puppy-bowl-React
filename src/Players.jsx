const Players = ({players} ) => {
    return(
        <>
        <h1>Players</h1>
        <ul>
            {players.map( player =>{
                return(
                    <li key = {player.id}> {player.name} </li>
                );
            })}
        </ul>
        </>
    );

};
export default Players;