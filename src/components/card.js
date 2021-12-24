import "./card.css"

function Card (props){
    return(
        <div className="card">
        <img className="img" src={props.src} alt="" />
        <p className="p1">{props.name}</p>
        <p className="p2">{props.birthday}</p>
        <p className="p3">{props.portrayed}</p>
        </div>
    )
}

export default Card;