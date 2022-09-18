const ActivityComponent = ({name, type, participants, price}) => {
    
    return (
        <div>
            <strong>Activity: {name}</strong>
            <p>Type: {type}</p>
            <p>Participants: {participants}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default ActivityComponent;