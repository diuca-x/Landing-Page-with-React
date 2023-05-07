
import React from "react";


const Jumbotron = ({title,info,url,button_label}) =>{
    return (
      <div class="bg-light p-5 rounded-lg  text-start">
        <h1 class="display-4">{title}</h1>
        <p>{info}</p>
        <a class="btn btn-primary btn-lg" href={url} role="button">{button_label}</a>
      </div>
    );
};

export default Jumbotron;