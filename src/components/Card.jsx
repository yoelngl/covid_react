import React from 'react';
import Skeleton from '../components/Skeleton';

function Card(props) {

    const text = `text-${props.color} text-center`
    return (
        <div>
            <div className={`card border-end border-${props.color} shadow h-200 py-2 bg-dark`}>
                <div className="card-body text-center">
                    {props.loading ? <Skeleton /> : 
                        // <div>
                        //     <h4 className="text-secondary">{props.country}</h4>
                        //     <div className="mb-2">
                        //         <small>Positif: <b className="text-primary">{props.positive}</b></small>
                        //     </div>
                        //     <div className="mb-2">
                        //         <small>Sembuh: <b className="text-success">{props.health}</b></small>
                        //     </div>
                        //     <div className="mb-2">
                        //         <small>Meninggal: <b className="text-danger">{props.death}</b></small>
                        //     </div>
                        // </div>
                        <div>
                            <h1 className={text}>{props.count}</h1>
                            <h6 className="text-secondary text-center">{props.status} </h6>
                        </div>
                    }
                    
                </div>

            </div>
        </div>
    );
}

export default Card;