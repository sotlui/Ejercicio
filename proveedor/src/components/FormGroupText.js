const FormGroupText = (props) =>{
    return(
        <div>
            {props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
            <input id={props.name} name={props.name} type={props.type} placeholder={props.placeholder} />
        </div>
    );
};

export default FormGroupText;