import React, { Component } from 'react';


import ZoneItem from './ZoneItem'



class ZonesList extends Component {



    removeZone = (e) => {
        this.props.removeZone(e);
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
                            {item.name ? (
                                <ZoneItem
                                    id={item.id}
                                    name={item.name}
                                    communes={item.communes}
                                    removeZone={this.removeZone}
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