import React, { Component } from 'react';
import CommuneItem from './CommuneItem';

class ZoneItem extends Component {



    removeZone = (e) => {
        this.props.removeZone(e);
    }

    

    modifyZone = (e) => {
        this.props.modifyZone(e);
    }

    removeCommune = (e) => {
        let parentId = e.target.parentNode.parentNode.id +1;
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
                        <button type="button" className="bozz-c-Btn danger small" onClick={this.removeZone} id={this.props.id}>Supprimer</button>
                    </div>
                </div>
                </div>


                <ul className="bozz-c-ZoneList-list  bozz-u-txt-left">
                    {citys.map((data) => {

                        return (
                            <CommuneItem
                                key={data.id}
                                id={data.id}
                                image={data.images}
                                name={data.name}
                                removeCommune={this.removeCommune}
                            />
                        )
                    })}
                </ul>

            </div>

        )
    }


}

export default ZoneItem