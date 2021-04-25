import React, { Component } from 'react';


class CreateImg extends Component {


    render() {
        const imgTableau = this.props.img;

        return (



            <li key={this.props.id} id={this.props.id} className="bozz-c-SingleCommune-imgList-item">
                <img src={this.props.url} alt="" className="bozz-c-SingleCommune-imgList-item-img" />
            </li>

        )
    }

}

export default CreateImg