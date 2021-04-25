import React, { Component } from 'react';


import ZoneItem from './ZoneItem'



let modalOpen = false

class ZonesList extends Component {


    
    removeZone = (e) => {
        let id = e.target.id;
        let zones = this.props.zones;
        const newZones = zones.splice(id, 1);
        
        this.setState({
            zones: newZones
        })
        this.closeModal()
    }

    openModal = () => {
        modalOpen = true 
        this.setState ({
            modalOpen: true
        })
    }

    closeModal = () => {
        modalOpen = false 
        this.setState ({
            modalOpen: false
        })
    }

    modifyZone = (e) => {
        this.props.modifyZone(e);
    }   

    render() {

        const myZones = this.props.zones

        return (
            <div className="bozz-c-Section bozz-u-txt-center">
                <h2 className="bozz-u-txt-center bozz-c-Heading-h1">Mes zones enregistrées</h2>

                <div className="bozz-c-ZoneList" >


                    {myZones.map((item) => (
                        <div className="bozz-c-ZoneList-item" key={item.id} id={item.id}>
                            
                            {
                                console.log(item)}
                            {item.name ? (
                                <ZoneItem
                                key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    modalOpen={modalOpen}
                                    communes={item.communes}
                                    removeZone={this.removeZone}
                                    openModal={this.openModal}
                                    closeModal={this.closeModal}
                                    modifyZone={this.modifyZone}

                                />


                            ) : ('')
                            }

                        </div>
                    ))}

                </div>
            </div>
        )


    }


}

export default ZonesList