import React, { Component } from 'react';
import ZoneItem from './ZoneItem';

class ZoneList extends Component {
    state = {
        title: 'Zones deouf 1',
        citys: [
            {
                'name': 'ville 1', imgs: [
                    { 'url': 'https://picsum.photos/180/180?random=1', 'name': 'nom1' },
                    { 'url': 'https://picsum.photos/180/180?random=2', 'name': 'nom2' },
                    { 'url': 'https://picsum.photos/180/180?random=3', 'name': 'nom3' },
                    { 'url': 'https://picsum.photos/180/180?random=4', 'name': 'nom4' },
                    { 'url': 'https://picsum.photos/180/180?random=5', 'name': 'nom5' }
                ]
            },
            {
                'name': 'ville 2', imgs: [
                    { 'url': 'https://picsum.photos/180/180?random=1', 'name': 'nom1' },
                    { 'url': 'https://picsum.photos/180/180?random=2', 'name': 'nom2' },
                    { 'url': 'https://picsum.photos/180/180?random=3', 'name': 'nom3' },
                    { 'url': 'https://picsum.photos/180/180?random=4', 'name': 'nom4' },
                    { 'url': 'https://picsum.photos/180/180?random=5', 'name': 'nom5' }
                ]
            }
        ]


    }

    render() {
        return (
            <div className="bozz-c-ZoneList">

                <div className="bozz-u-hspace">
                    <div className="bozz-u-wrapper">

                        <div className="bozz-c-ZoneList-inner">

                            <h3 className="bozz-c-ZoneListe-list-title bozz-c-Heading-h3  color_secondary">{this.state.title}</h3>

                            <ul className="bozz-c-ZoneList-list  bozz-u-txt-left">
                                {this.state.citys.map((data, key) => {

                                    return (
                                        <ZoneItem key={key} image={data.imgs} name={data.name} />
                                    )
                                })}
                            </ul>

                        </div>

                    </div>
                </div>

            </div>
        )
    }


}

export default ZoneList