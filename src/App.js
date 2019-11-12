import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar'
import lfpContext from './lfpContext'
import Home from './Components/main/Home';


class App extends Component {

  state = {
    currentPage: 'Center for Arts and Community'
  }

  changePage = newTitle =>{
    console.log("Header is now " + newTitle);
    this.setState({
      currentPage: newTitle
    })
  }

  renderMainColumn(){
    return(
      <Home/>
    )
  }

  render() {
    const contextValue = {
      currentPage: this.state.currentPage,
      changePage: this.changePage
    }
    return (
      <lfpContext.Provider value={contextValue}>
      <body>
        <Navbar currentPage={this.state.currentPage}/>


        <main role='main'>
          <div className='container-fluid'>

            <div className='row'>
              <div className='col-2 menu'>
                <nav class="nav flex-column">
                  <a onClick={()=>this.changePage("Going Green")} class="nav-link active" href="#Going-Green">Going Green</a>
                  <a onClick={()=>this.changePage("Events Calender")} class="nav-link" href="#Events-Calender">Events Calender</a>
                  <a onClick={()=>this.changePage("History")} class="nav-link" href="#History">History</a>
                  <a onClick={()=>this.changePage("Pictures")} class="nav-link" href="#Pictures">Pictures</a>
                  <a onClick={()=>this.changePage("Mission")} class="nav-link" href="#Mission">Mission</a>
                  <a onClick={()=>this.changePage("Rental Space")} class="nav-link" href="#Rental-Space">Rental Space</a>
                  <a onClick={()=>this.changePage("FAQS")} class="nav-link" href="#FAQS">FAQS</a>
                </nav>
              </div>
              
              <div className='col-7 main-column'>
                <Home/>
              </div>

              <div className='col-3 news'>
                News
              </div>
            </div>
          
          </div>          
        </main>

        <footer className='footer mt-auto py-3'>
          <div class='container-fluid'>
            <div className='row'>
            <ul className='text-muted bot-menu col-12'>
              <div className='col-3'>
              <li>Contact</li>
              </div>
              <div className='col-3'>
              <li>Partners</li>
              </div>
              <div className='col-3'>
              <li>Board</li>
              </div>
              <div className='col-3'> 
              <li>Media</li>
              </div>
            </ul>
            </div>
          </div>
        </footer>

      </body>
      </lfpContext.Provider>
    );
  }
}

export default App;
