export default function Hello(props){
  return (
        <div>
        <p>id: {props.id}</p>
        <p>Book title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>Year: {props.year}</p>
    </div>
  );
}