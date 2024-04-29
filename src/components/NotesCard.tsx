import Card from "react-bootstrap/Card";
import { Note } from "../types/notes.type";
import { Button } from "react-bootstrap";


type Props = Note & {

}

function NotesCard(props: Props) {

  const categories = props.categories.map(c => '#' + c).join(' ')

  return (
    <Card className='mb-1'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text>User: {props.user}</Card.Text> {/* hinzugefügt */}
        <Card.Text>Date: {props.date.toLocaleDateString()}</Card.Text> {/* hinzugefügt */}
        <Card.Subtitle className="mb-2 text-muted">{
          categories
        }</Card.Subtitle>
        <Button variant="outline-success" size="sm">Bearbeiten</Button>{' '}
        <Button variant="outline-danger" size="sm">Löschen</Button>{' '}
      </Card.Body>
    </Card>
  )
}

export default NotesCard;