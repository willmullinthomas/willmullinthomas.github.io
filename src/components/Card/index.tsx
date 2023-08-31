import React from "react";
import Tag from "../Tag";
import "./Card.css";

type CardProps = {
    title: string;
    tags: Array<string>;
    imageSrc: string;
    imageSide?: 'right' | 'left';
    className?: string;
} & React.PropsWithChildren;

const Card: React.FC<CardProps> = props => {

    const cardContainer = React.useMemo(() =>
        `card-container ${props.className??""}`
    , [props.className]);

    return (
        <div className={cardContainer}>
            { props.imageSide === 'left' &&
                <img src={props.imageSrc} alt="card-left" className="card-image" />
            }
            <div className="card-content">
                <div className="card-title">{props.title}</div>
                { props.children }
                <div className="card-tags">
                    { props.tags.map((tag) => 
                        <Tag key={tag}>
                            { tag }
                        </Tag>
                    ) }
                </div>
            </div>
            { props.imageSide === 'right' &&
                <img src={props.imageSrc} alt="card-left" className="card-image" />
            }
        </div>
    );
}

Card.defaultProps = {
    imageSide: 'right'
}

export default Card;