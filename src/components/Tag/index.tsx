import React from "react";
import "./Tag.css";

type TagProps = {
    className?: string;
} & React.PropsWithChildren;

const Tag: React.FC<TagProps> = props => {

    const tagClass = React.useMemo(() => 
        `tag-container ${props.className??""}`
    , [props.className]);

    return (
        <div className={tagClass}>
            { props.children }
        </div>
    );
}

export default Tag;