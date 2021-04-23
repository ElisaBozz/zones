import React, { Component } from 'react';



import CreateSingleCommune from './CreateSingleCommune'


class AdminZone extends Component {

    handleName = (e) => {

        this.props.handleName(e)

    }

    handleCommune = (e) => {
        this.props.handleCommune(e)
    }

    addCommunes = (e) => {
        this.props.addCommunes(e)

    }

    addZones = (e) => {
        this.props.addZones(e)
    }
    modifyZoneItem = (e) => {
        this.props.modifyZoneItem(e)
    }


    selectedCommune = (e) => {

        this.props.selectedCommune(e)
    }

    showNewSection = (e) => {
        this.props.showNewSection(e)
    }





    render() {

        const communesList = this.props.communesList
        const myCommunes = this.props.tempZone.communes
        let afficheSection = false

        if (myCommunes && myCommunes.length > 0) {
            afficheSection = true
        }

        return (
            <div className="bozz-c-CreateZone-form">
                <div className="bozz-c-Fields">
                    <label className="bozz-c-Fields-label">Nom de la Zone</label>
                    <input type="text" value={this.props.inputValue} onChange={this.handleName} />
                </div>

                <button type="button" className="bozz-c-Btn bozz-c-CreateZone-btnNext" onClick={this.showNewSection}>Etape suivante</button>

                <div className="bozz-c-CreateZone-comn">


                    <div className="bozz-c-Fields">
                        <label className="bozz-c-Fields-label">Sélectionnez une commune</label>
                        <input type="text" value={this.props.selectCommune} onChange={this.handleCommune} />
                        <ul className="bozz-c-CreateZone-comn-list">
                            {communesList.map((item, key) => (

                                <li className="bozz-c-CreateZone-comn-item" key={key} onClick={this.selectedCommune}>
                                    {item.nom}
                                </li>
                            ))}
                        </ul>
                    </div>

                        <button type="button" className="bozz-c-Btn" onClick={this.addCommunes}>Ajouter la communes</button>
                   


                    {
                        this.props.inputValue ?
                            <h3 className="bozz-c-CreateZone-title">
                                <span className="bozz-c-CreateZone-title bozz-c-Heading-h3">
                                    {this.props.inputValue}
                                </span>
                            </h3>
                            : ''
                    }

                    {myCommunes ?
                    <div className="bozz-c-CreatedCommune">
                        {myCommunes.map((item) => (
                            <div key={item.id} id={item.id} className="bozz-c-SingleCommune">
                                {item.name ? (
                                    <CreateSingleCommune
                                        title={item.name}
                                        img={item.images}

                                    />
                                ) : ('')
                                }
                            </div>
                        ))}

                        {afficheSection === true ? (

                            this.props.title === 'Modifier la zone' ? (
                                <button className="bozz-c-Btn bozz-c-CreateZone-footer" type="button" onClick={this.modifyZoneItem}>Modifier ma zone</button>
                            ) : (
                                <button className="bozz-c-Btn bozz-c-CreateZone-footer" type="button" onClick={this.addZones}>Enregistrer ma zone</button>
                            )

                        )

                            : (
                                <p className="bozz-c-CreateZone-footer">
                                    Vous n'avez pas renseignez de communes
                                </p>
                            )
                        }
                    </div>
                    : ''}
                </div>

            </div>


        )


    }


}

export default AdminZone