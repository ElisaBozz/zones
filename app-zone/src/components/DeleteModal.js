import React, { Component } from 'react';


class Modal extends Component {


    removeZone = (e) => {
        this.props.removeZone(e);
    }


    closeModal = () => {
        this.props.closeModal();
    }


    render() {

        return (
            <div className="bozz-c-Modal">
                <div className="bozz-c-Modal-inner">

                    <h4 className="bozz-c-Heading-h4">Voulez-vous supprimer : {this.props.name}</h4>

                    <div className="bozz-c-Modal-btn">
                        <button type="button" className="bozz-c-Btn danger" onClick={this.removeZone} id={this.props.id}>Oui</button>
                        <button type="button" className="bozz-c-Btn" onClick={this.closeModal} id={this.props.id}>Non</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal