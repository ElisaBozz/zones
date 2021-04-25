import React, { Component } from 'react';
import CommuneItem from './CommuneItem';
import Modal from './DeleteModal'

// let modalOpen = false
class ZoneItem extends Component {



    removeZone = (e) => {
        this.props.removeZone(e);
    }

    openModal = () => {
        this.props.openModal()
    }

    closeModal = () => {
        this.props.closeModal()
    }

    modifyZone = (e) => {
        this.props.modifyZone(e);
    }

    removeCommune = (e) => {
        let parentId = e.target.id;
        const newComn = this.props.communes.splice(parentId, 1);

        this.setState({
            communes: newComn
        })
    }




    render() {
        const citys = this.props.communes;

        return (
            <div className="bozz-c-ZoneList-inner">

                <div className="bozz-u-hspace">
                    <div className="bozz-c-ZoneList-head bozz-u-wrapper bozz-u-txt-left">
                        <h3 className="bozz-c-ZoneList-title bozz-c-Heading-h2 color_secondary">{this.props.name}</h3>

                        <div className="bozz-c-ZoneList-action">
                            <button type="button" className="bozz-c-Btn secondary bozz-c-ZoneList-modify small" onClick={this.modifyZone} id={this.props.id}>Modifier</button>
                            <button type="button" className="bozz-c-Btn danger small" onClick={this.openModal} id={this.props.id}>Supprimer</button>
                        </div>
                    </div>
                </div>




                <ul className="bozz-c-ZoneList-list  bozz-u-txt-left">
                    {citys.map((data, key) => {

                        return (
                            <CommuneItem
                                key={data.key}
                                id={data.key}
                                image={data.images}
                                name={data.name}
                                removeCommune={this.removeCommune}
                            />
                        )
                    })}
                </ul>


                {this.props.modalOpen === true ?
                
                    <Modal
                        name={this.props.name}
                        id={this.props.id}
                        closeModal={this.closeModal}
                        removeZone={this.removeZone}
                    />
                    : ''}
            </div>

        )
    }


}

export default ZoneItem