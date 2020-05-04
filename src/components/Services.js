import React, { Component } from 'react'
import Title from "../components/Title"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
export default class Services extends Component {
    state={
    services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info:"Lorem teo fhhr boin we serve two conctails and hiking"
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:"Lorem teo fhhr boin we serve two conctails and hiking"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Lorem teo fhhr boin we serve two conctails and hiking"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Lorem teo fhhr boin we serve two conctails and hiking"
            }
        ]
    }
    render() {
        
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => 
                    { return <article key={index} className="service">
                <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article> 
                    })}
                </div>
            </section>
        )
    }
}
