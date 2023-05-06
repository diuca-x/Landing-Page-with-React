
import React from "react";


const Jumbotron = ({info,url}) =>{
    return (
<div class="bg-light p-5 rounded-lg m-3 text-start">
  <h1 class="display-4">A Warm Welcome!</h1>
  <p>{info}</p>
  <a class="btn btn-primary btn-lg" href={url} role="button">Call to action!</a>
</div>
    );
};

export default Jumbotron;