import React, { Component } from 'react';
import AdminZone from './AdminZone';


import ZonesList from './ZonesList';



class Zone extends Component {

    state = {
        title: 'Créer une zone',
        isEdit: 'no',
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
                modalOpen: false,
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
                communes: []
            }
        })
        // todo function pour virer le select et rajouter le bouton
    }

    modifyZoneItem = () => {

        let zones = this.state.zones
        // let oldZone = this.state.tempZone
        // let id = this.state.tempZone.id
    

        // zones.splice( id, 1, oldZone )

        this.setState({
            zones: zones,
            title: 'Créer une nouvelle zone',
            selectCommune: '',
            inputValue: '',
            tempZone: {
                id: '',
                name: '',
                communes: []
            }
        })

        console.log(this.state)
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


    modifyZone = (e) => {
        let id = e.target.id;
        let thisZone = this.state.zones[id]
        

        
        this.setState({
            tempZone: thisZone,
            title: 'Modifier la zone',
            inputValue:this.state.zones[id].name,
        })
    }

    // removeZone = (e) => {
    //     var id = e.target.id;
    
    //     let zones = this.state.zones;

    //     const newZones = zones.splice(id, 1);

    //     this.setState({
    //         zones: newZones
    //     })
    // }

    render() {


        const myZones = this.state.zones
        let afficheSectionZone = false

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
                                <AdminZone

                                    inputValue={this.state.inputValue}
                                    selectCommune={this.state.selectCommune}
                                    communesList={this.state.communesList}
                                    tempZone={this.state.tempZone}
                                    zones={this.state.zones}
                                    title={this.state.title}

                                    handleName={this.handleName}
                                    showNewSection={this.showNewSection}
                                    handleCommune={this.handleCommune}
                                    addCommunes={this.addCommunes}
                                    addZones={this.addZones}
                                    // removeZone={this.removeZone}
                                    modifyZoneItem={this.modifyZoneItem}
                                    selectedCommune={this.selectedCommune}
                                />

                            </div>

                        </div>
                    </div>
                </div>

                {afficheSectionZone === true ? (
                    <ZonesList
                        removeZone={this.removeZone}
                        modifyZone={this.modifyZone}
                        zones={this.state.zones}

                    />
                ) : ('')}

            </div>
        )


    }


}

export default Zone