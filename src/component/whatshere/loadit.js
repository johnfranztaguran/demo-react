import React from 'react';

const Load = (props) => {
    const {myData, filterText} = props
        const nameList = myData //chain
        .filter(filterhere => {
            return filterhere.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map((datahere, i) =>  {
            return (
                <div className="col-lg-3 col-md-4 col-sm-6 p-3" key={i}>
                <div className="card">
                <img className="card-img-top" src={datahere.logo_url} alt="" />
                <div key={datahere.team_id} className="card-body">
                    <h5 className="card-title">{datahere.name}</h5>
                    <p className="card-text">Id: {datahere.team_id} Rating: {datahere.rating}</p>
                    Tag Name: <p>{datahere.tag}</p>
                    Team Wins: <p>{datahere.wins}</p>
                    Team Losses: <p>{datahere.losses}</p>
                    
                </div>
                </div>
                </div>
            )
        })
        return ( 
            <div className="row">
                {nameList}
            </div>
     );
}
export default Load