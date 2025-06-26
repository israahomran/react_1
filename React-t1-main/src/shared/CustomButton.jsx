function CustomButton(props){
    return (
        <button className={`btn btn-outline-${props.type} btn-lg rounded-pill shadow m-1`}>{props.text}</button>
    );
}
export default CustomButton;