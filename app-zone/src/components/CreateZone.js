import React, { Component } from 'react';

import CreatedCommune from './CreatedCommune'


const myApi = 'https://geo.api.gouv.fr/communes'

class CreateZone extends Component {

    state = {
        title: 'Créer une zone',
        selectCommune: '',
        inputValue: '',
        communesList: [],
        zone:
        {
            name: '',
            communes: [
                {
                    name: '',
                    images: []
                }
            ]
        }


    }

    handleName = (e) => {

        this.setState({
            inputValue: e.target.value
        })

    }

    handleCommune = (e) => {
        this.setState({
            selectCommune: e.target.value
        })
    }

    addSingleCommune = (e) => {

        this.setState({
            zone:
            {
                name: this.state.inputValue,
                communes: [
                    {
                        name: this.state.selectCommune,
                        images: []
                    }
                ]
            }

        })

        e.target.classList.add('showNextSection');




    }

    showNewSection = (e) => {
        e.preventDefault();
        e.target.classList.add('showNextSection');
    }


    // componentDidMount() {

    //     fetch(myApi)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     communesList: result
    //                 });
    //             },

    //         )
    // }

    render() {

        // this.addCommunes()
        // const communesList = this.state.communesList
        const myCommunes = this.state.zone.communes

        return (
            <div className="bozz-c-CreateZone">

                <div className="bozz-u-hspace">
                    <div className="bozz-u-wrapper">

                        <div className="bozz-c-CreateZone-inner  bozz-u-txt-center">

                            <h2 className="bozz-c-CreateZone-list-title bozz-c-Heading-h2">{this.state.title}</h2>

                            <form>
                                <div className="bozz-c-Fields">
                                    <label className="bozz-c-Fields-label">Nom de la Zone</label>
                                    <input type="text" value={this.state.inputValue} onChange={this.handleName} />
                                </div>

                                <button type="button" className="bozz-c-Btn bozz-c-CreateZone-btnNext" onClick={this.showNewSection}>Etape suivante</button>

                                <div className="bozz-c-CreateZone-comn">

                                    <h3 className="bozz-c-CreateZone-comn-title bozz-c-Heading-h3">
                                        {this.state.inputValue ? this.state.inputValue : 'Renseignez un nom de zone'}
                                    </h3>

                                    <div className="bozz-c-Fields">
                                        <label className="bozz-c-Fields-label">Sélectionnez une commune</label>

                                        <select required value={this.state.zone.selectCommune} onChange={this.handleCommune}>
                                            {/* {communesList.map((item, key) => (
                                            <option key={key}>
                                                {item.nom}
                                            </option>
                                        ))} */}

                                            <option></option>
                                            <option>bbbbbbbbbbb</option>
                                            <option>ccccccccccccc</option>
                                            <option>dddddddd</option>
                                        </select>
                                    </div>




                                    <button type="button" className="bozz-c-Btn" onClick={this.addSingleCommune}>ajouter une communes</button>

                                    {console.log(myCommunes)}

                                    <div className="bozz-c-CreateZone-section">

                                        {myCommunes.map((item, key) => (

                                            <div key={key}>
                                                {item.name ? (
                                                    <CreatedCommune title={item.name} />
                                                ) : ('')
                                                }
                                            </div>
                                        ))}



                                    </div>
                                </div>




                            </form>

                            {/* {this.state.zone.communes ?  : ""} */}


                        </div>

                    </div>
                </div>

            </div>
        )


    }


}

export default CreateZone