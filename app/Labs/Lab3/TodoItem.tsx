import { ListGroupItem } from "react-bootstrap";

const TodoItem = ( { todo = { done: true, title: 'Buy milk',
                              status: 'COMPLETED' } }) => {
 return (
   <ListGroupItem>
     <input type="checkbox" className="me-2"
            checked={todo.done}/>
     {todo.title} ({todo.status})
   </ListGroupItem>
 );}
export default TodoItem;