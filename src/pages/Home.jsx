import { useContext } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import TodoCard from "../components/TodoCard";

export default function Home() {
  const todos = useContext(TodoContext).todos;
  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos }) {
  return todos.map((todo) => {
    return (
      <Col md={4} key={todo.id}>
        <TodoCard todo={todo} />
      </Col>
    );
  });
}
