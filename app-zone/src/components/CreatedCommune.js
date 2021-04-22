import React, { Component } from 'react';



const CreatedCommune = (props) => {

    var imgTableau = []
    let url = 'https://picsum.photos/180/180?random='

    var a = 0;
    for (var i = 0; i < 5; i++) {
        var item = url + Math.random()
        imgTableau.push(item);
    }
    return (


        <div className="bozz-c-CreatedCommune bozz-u-txt-left">
            <p className="bozz-c-CreatedCommune-title bozz-c-Heading-h4">{props.title}</p>
            <ul className="bozz-c-CreatedCommune-imgList">
                {imgTableau.map((data, key) => {

                    return (
                        <li key={key} className="bozz-c-CreatedCommune-imgList-item">
                            <img src={data} alt="" className="bozz-c-CreatedCommune-imgList-item-img" />
                        </li>
                    )
                })}

            </ul>
        </div>
    )

}

export default CreatedCommune