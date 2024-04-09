import React from 'react'

export const Navbar = (props) => {
  console.log("props :",props);
  const fData = props.data
  return (
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Navbar </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{fData.services}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{fData.product}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">{fData.contact}</a>
      </li>
    </ul>
  </div>
</nav>
  )
}
