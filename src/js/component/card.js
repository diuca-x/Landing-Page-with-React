import React from "react";

const Card = ({title,text,button_label,button_link,img}) => {
    let styles = {
        width: "18rem"        
    }
    return(
        <div className="card my-4 " style={styles}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={button_link} className="btn btn-primary">{button_label}</a>
            </div>
        </div>
    );
}

export default Card;