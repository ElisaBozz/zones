import React, { Component } from 'react';


const ZoneItem = (props) => {


    let imgTab = props.image;

    return (


        <li className="bozz-c-ZoneItem">
            <p className="bozz-c-ZoneItem-title bozz-c-Heading-h4">{props.name}</p>
            <ul className="bozz-c-ZoneItem-imgList">
                 {imgTab.map((data, key) => {

                    return (
                        <li key={key} className="bozz-c-ZoneItem-imgList-item">
                            <img src={data.url} alt={data.name} className="bozz-c-ZoneItem-imgList-item-img"/>
                        </li>
                    )
                })} 

            </ul>
        </li>
    )
}

export default ZoneItem