import React, { Component } from 'react';
import CreateImg from './creatImg';


class CreateSingleCommune extends Component {


    render() {
        const imgTableau = this.props.img;

        return (



            <div className="bozz-c-SingleCommune-inner bozz-u-txt-left">
                <p className="bozz-c-SingleCommune-title bozz-c-Heading-h4">{this.props.title}</p>
                <ul className="bozz-c-SingleCommune-imgList">
                    {imgTableau.map((data) => {

                        return (
                            <CreateImg
                                key={data.id}
                                id={data.id}
                                url={data.url}
                            />
                        )
                    })}

                </ul>
            </div>
        )
    }

}

export default CreateSingleCommune