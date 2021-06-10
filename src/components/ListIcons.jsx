import '../style/ListIcons.css'

export default function ListIcons (props) {
    return (
        <div className="listIcon" >
            <img alt={`Icon ${props.path}`} src={props.path} />
            <p>{props.content}</p>
        </div>
    )
}