import React, { Component } from 'react';



function CreateSingleCommune (props) {
    
    const imgTableau = props.img;
    
    

    return (

        

        <div className="bozz-c-SingleCommune-inner bozz-u-txt-left">
            <p className="bozz-c-SingleCommune-title bozz-c-Heading-h4">{props.title}</p>
            <ul className="bozz-c-SingleCommune-imgList">
                {imgTableau.map((data) => {

                    return (
                        <li key={data.id} id={data.id} className="bozz-c-SingleCommune-imgList-item">
                            <img src={data.url} alt="" className="bozz-c-SingleCommune-imgList-item-img" />
                        </li>
                    )
                })}

            </ul>
        </div>
    )

}

export default CreateSingleCommune