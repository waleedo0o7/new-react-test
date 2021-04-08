import logo from './logo.svg';
import './App.css';
import './css/my-style.css';
import React from 'react';

class App extends React.Component {

  componentDidMount = () => {
    this.getData();
  }

  getData() {
    fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(e => {
      return e.json();
    }).then(res => {
      this.setState({ users: res.data })
    })
  }

  state = {
    name: "02 020 20 20 20",
    age: 16,
    items: [],
    users : []
  }

  render() {

    return (
      <div className="App">

        <div id="top-menu">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <a className="navbar-brand" href="#"> Logo </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>{/* top-menu */}
        <div id="page-content" className="home-page">
          <section id="intro">
            <h1> welcome to our website </h1>
          </section>
          <section id="about-us">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2> welcome to valencia co. </h2>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <a className="btn btn-primary" href="about-us.html"> Read More </a>
                </div>
                <div className="col-md-6">
                  <img className="img-fluid width100" src="/images/logo.png" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="jobs-section">
            <div className="container">
              <div className="all-jobs">
                <div className="row">

                  {this.state.users.map((item, index) => {

 

                      return (
                        <div className="col-md-4 mb-3">

                          {item.id}

                        </div>
                      ) 

                  })}



                </div>
              </div>
            </div>
          </section>

        </div>

        <footer id="footer">
          <p> all copyrights reserved to </p>
        </footer>


      </div>
    );
  }

}

export default App;