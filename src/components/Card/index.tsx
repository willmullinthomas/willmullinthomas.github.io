import React from "react";
import Tag from "../Tag";
import "./Card.css";

type CardProps = {
    title: string | JSX.Element;
    tertiaryText?: string;
    tags: Array<string>;
    imageSrc?: string;
    imageSide?: 'right' | 'left';
    className?: string;
    contentClassName?: string;
    imageClassName?: string;
} & React.PropsWithChildren;

const Card: React.FC<CardProps> = props => {

    const cardContainerClassName = React.useMemo(() =>
        `card-container ${props.className??""}`
    , [props.className]);

    const cardContentClassName = React.useMemo(() =>
        `card-content ${props.contentClassName??""}`
    , [props.contentClassName]);

    return (
        <div className={cardContainerClassName}>
            { props.imageSrc && props.imageSide === 'left' &&
                <img src={props.imageSrc} alt="card-left" className={props.imageClassName}/>
            }
            <div className={cardContentClassName}>
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
            { props.imageSrc && props.imageSide === 'right' &&
                <img src={props.imageSrc} alt="card-left" className={props.imageClassName} />
            }
        </div>
    );
}

Card.defaultProps = {
    imageSide: 'right'
}

export default Card;