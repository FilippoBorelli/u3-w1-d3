import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {Component} from "react"

class SingleBook extends Component{
    state = {
            selected: false,
    };
    render(){
      return this.props.books.slice(0,1).map((book) => {

        return(
          <Card style={{ width: '18rem' }}
          onClick={() => {
            this.setState({selected: true,})
          }}
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>
                {this.props.book.category}
              </Card.Text>
              <Button variant="primary">{this.props.book.price}</Button>
            </Card.Body>
          </Card>
        )
      })
    }
}

export default SingleBook