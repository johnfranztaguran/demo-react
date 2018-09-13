import React, { Component } from 'react';
import Load from './whatshere/loadit';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            dataHero: [],
            filterText: ''
        }
    }

    componentDidMount() {
		fetch("https://api.opendota.com/api/teams/")
		  .then(response => response.json())
		  .then(dataHero => this.setState({ dataHero }));
    }

    filterUpdate() {
        const val = this.myValue.value
        
        this.setState({
            filterText: val
          })
      }

      

    render() { 
        const { logout, deleteUser } = this.props
        return ( 
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <a className="navbar-brand" href="#">Welcome Home</a>
                
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <form className="form-inline my-2 my-lg-0" >
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(val) => this.filterUpdate(val)}
                    ref={(value) => this.myValue = value} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={logout}>Logout</button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={deleteUser}>Delete Account</button>
                </form>
                </div>
                </nav>
            </div>
                <div>
                    <Load myData={this.state.dataHero}
                          filterText={this.state.filterText}
                          
                     /> 
                </div>
        </div>
         );
    }
}
 
export default Home;

