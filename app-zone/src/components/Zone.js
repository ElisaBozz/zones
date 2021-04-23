import React, { Component } from 'react';



import CreateSingleCommune from './CreateSingleCommune'
import ZonesList from './ZonesList';



class Zone extends Component {

    state = {
        title: 'Créer une zone',
        selectCommune: '',
        inputValue: '',
        communesList: [],
        tempImg: [],
        tempZone: {
            id: '',
            name: '',
            communes: []
        },
        zones: []
    }

    handleName = (e) => {

        this.setState({
            inputValue: e.target.value
        })

    }

    handleCommune = (e) => {
        this.randomImg()

        let nbCarac = e.target.value.length;
        e.target.nextElementSibling.classList.remove('hidden')

        this.setState({
            selectCommune: e.target.value
        })

        if (nbCarac >= 3) {
            this.fetchCommunes()
        }
    }

    addCommunes = (e) => {
        let communes = this.state.tempZone.communes
        let zonesNb = this.state.zones.length

        console.log(zonesNb)
        communes.push({
            id: communes.length,
            name: this.state.selectCommune,
            images: this.state.tempImg
        })

        this.setState({
            tempZone:
            {
                id: zonesNb,
                name: this.state.inputValue,
                communes: communes
            },
            selectCommune: ''
        })

        e.target.classList.add('showNextSection');
    }

    addZones = () => {

        let zones = this.state.zones
        let oldZone = this.state.tempZone


        zones.push(oldZone)

        this.setState({
            zones: zones,
            selectCommune: '',
            inputValue: '',
            tempZone: {
                id: '',
                name: '',
                communes: [
                    {
                        id: '',
                        name: '',
                        images: [
                            {
                                id: '',
                                url: ''
                            }
                        ]
                    }
                ]
            }
        })
    }

    showNewSection = (e) => {
        e.target.classList.add('showNextSection');
    }


    fetchCommunes = () => {

        const myApi = 'https://geo.api.gouv.fr/communes?nom=' + this.state.selectCommune

        fetch(myApi)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        communesList: result
                    });
                },

            )
    }

    selectedCommune = (e) => {

        this.setState({
            selectCommune: e.target.innerHTML
        })

        e.target.offsetParent.lastChild.classList.add('hidden')
    }

    randomImg = (e) => {
        var imgTableau = []
        let url = 'https://picsum.photos/180/180?random='


        for (var i = 0; i < 5; i++) {
            var item = url + Math.random()
            imgTableau.push(
                {
                    id: i,
                    url: item
                }
            );
        }



        this.setState({
            tempImg: imgTableau
        })
    }


    removeCommune = (e) => {
    }

    removeZone = (e) => {
        let parentId = e.target.id + 1;
        const newZone = this.state.zones.splice(parentId, 1);

        this.setState({
            zones: newZone
        })
    }

    render() {

        const communesList = this.state.communesList
        const myZones = this.state.zones
        const myCommunes = this.state.tempZone.communes
        let afficheSection = false
        let afficheSectionZone = false

        if (myCommunes.length > 0) {
            afficheSection = true
        }
        if (myZones.length > 0) {
            afficheSectionZone = true
        }

        return (
            <div className="bozz-c-CreateZone">
                <div className="bozz-c-Section bozz-u-txt-center">
                    <div className="bozz-u-hspace">
                        <div className="bozz-u-wrapper">

                            <div className="bozz-c-CreateZone-inner  bozz-u-txt-center">

                                <h2 className="bozz-c-CreateZone-title bozz-c-Heading-h1">{this.state.title}</h2>

                                <div className="bozz-c-CreateZone-form">
                                    <div className="bozz-c-Fields">
                                        <label className="bozz-c-Fields-label">Nom de la Zone</label>
                                        <input type="text" value={this.state.inputValue} onChange={this.handleName} />
                                    </div>

                                    <button type="button" className="bozz-c-Btn bozz-c-CreateZone-btnNext" onClick={this.showNewSection}>Etape suivante</button>

                                    <div className="bozz-c-CreateZone-comn">


                                        <div className="bozz-c-Fields">
                                            <label className="bozz-c-Fields-label">Sélectionnez une commune</label>
                                            <input type="text" value={this.state.selectCommune} onChange={this.handleCommune} />
                                            <ul className="bozz-c-CreateZone-comn-list">
                                                {communesList.map((item, key) => (

                                                    <li className="bozz-c-CreateZone-comn-item" key={key} onClick={this.selectedCommune}>
                                                        {item.nom}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button type="button" className="bozz-c-Btn" onClick={this.addCommunes}>Ajouter une communes</button>


                                        {
                                            this.state.inputValue ?
                                                <h3 className="bozz-c-CreateZone-title">
                                                    <span className="bozz-c-CreateZone-title bozz-c-Heading-h3">
                                                        {this.state.inputValue}
                                                    </span>
                                                </h3>
                                                : ''
                                        }
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

                                            {afficheSection === true ?
                                                <button className="bozz-c-Btn bozz-c-CreateZone-footer" type="button" onClick={this.addZones}>Enregistrer ma zone</button>
                                                : (
                                                    <p className="bozz-c-CreateZone-footer">
                                                        Vous n'avez pas renseignez de communes
                                                    </p>
                                                )
                                            }
                                        </div>

                                    </div>




                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {afficheSectionZone === true ? (
                    <ZonesList
                        zones={this.state.zones}
                        removeZone={this.removeZone}
                    />
                ) : ('')}

            </div>
        )


    }


}

export default Zone