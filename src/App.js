import logo from './logo.svg';
import './App.css';
import './css/my-style.css';
import React from 'react';

class App extends React.Component {

  componentDidMount = () => {
    this.getData();
    this.getOrders();
  }

  getData() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(e => {
      return e.json();
    }).then(res => {
      //console.log(res);
      this.setState({ items: res })
    })
  }

  getOrders() {
    fetch("http://localhost:3000/data.json", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then(e => {
      return e.json();
    }).then(res => {
      // console.log(res.items[8]);
      this.setState({ orders: [res] });
    })
  }

  // getOrderDyId(id){
  //   this.state.orders.items[id]
  // }


  state = {
    name: "02 020 20 20 20",
    age: 16,
    items: [],
    orders : []
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

                  {this.state.items.map((item, index) => {

                    if (item.completed === false) {
                      var isCompleted = " it's completed "
                      var isCompletedClass = "green"
                    } else {
                      var isCompleted = " NOT completed yet "
                      var isCompletedClass = "red"
                    }

                    if (index < 9) {

                      return (
                        <div className="col-md-4 mb-3">
                          <div className="one-job" id={index} key={index}>
                            <div className="image">
                              <img className="img-fluid" src="images/company-logo.jpg" alt="" />
                            </div>
                            <div className="job-detials">
                              <p> user Id  :  {item.userId}  </p>
                              <p> id : {item.id} </p>
                              <p> title : {item.title} </p>
                              <p className={isCompletedClass}> completed : {isCompleted} </p>
                            </div>
                          </div>
                        </div>
                      )
                    }

                  })}



                </div>
              </div>
            </div>
          </section>
          {/* <section id="send-task">
            <div className="container">
              <form>
                <input placeholder="userId" className="form-control" id="userId" />
                <input placeholder="id" className="form-control" id="id" />
                <input placeholder="taskTitle" className="form-control" id="taskTitle" />
                <input placeholder="isCompleted" className="form-control" id="isCompleted" />
                <button id="submit" className="btn btn-primary btn-block"> Send </button>
              </form>
            </div>
          </section> */}


          <section id="send-task">
            <div className="container">
              <form>
                <input placeholder="pilot id" className="form-control" id="pilotId" />
                <button id="submit" className="btn btn-primary btn-block"> Send </button>

                {this.state.orders.map((item, index) => {
                  return (
                    <div className="col-md-4 mb-3">
                      {item.items[5].customer_firstname}
                      <p> customer name : 11111 2222 </p>
                      <p> sku : 11111 2222 </p>
                      <p> Number Of Items : 11111 2222 </p>
                      <p> total Price : 11111 2222 </p>
                    </div>
                  )
                })}
              </form>
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