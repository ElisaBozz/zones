import React, { Component } from 'react';


class CommuneItem extends Component {



    removeCommune = (e) => {
        this.props.removeCommune(e)

    }

    render() {

        const imgTab = this.props.image
        return (

            <li className="bozz-c-CommuneItem" id={this.props.id}>
                <div className="bozz-u-hspace">
                    <div className="bozz-u-wrapper">
                        <div className="bozz-c-CommuneItem-inner">
                            <h3 className="bozz-c-CommuneItem-title">

                                <span className="bozz-c-Heading-h4">{this.props.name}</span>
                            </h3>
                            <ul className="bozz-c-CommuneItem-imgList">
                                {imgTab.map((data) => {

                                    return (
                                        <li key={data.id} id={data.id} className="bozz-c-CommuneItem-imgList-item">
                                            <img src={data.url} alt="" className="bozz-c-CommuneItem-imgList-item-img" />
                                        </li>
                                    )
                                })}

                            </ul>

                            <button type="button" className="bozz-c-CommuneItem-remove" id={this.props.id} onClick={this.removeCommune}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g><g><path fill="#ffffff" d="M13.879 6.38H8.62V1.12a1.121 1.121 0 0 0-2.242 0v5.26H1.121C.503 6.38 0 6.881 0 7.5c0 .618.503 1.12 1.12 1.12h5.26v5.259a1.122 1.122 0 0 0 2.24 0V8.62h5.259C14.497 8.62 15 8.118 15 7.5c0-.618-.503-1.12-1.121-1.12" /></g></g></svg>
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </li>
        )
    }

}

export default CommuneItem