import { useState } from 'react';

import Button from './Button';
import './accordion.css';

function Accordion({ id, title, children }) {

    const [isExpanded, setIsExpanded] = useState(false);

    const iconClass = isExpanded ? 'gg-math-minus' : 'gg-math-plus';

    return (
        <div className="accordion">
            <Button type="button" visual="button"
                className="accordion__button"
                id={`${id}-header`}
                aria-controls={`${id}-panel`}
                aria-expanded={isExpanded}
                onClick={(e) => {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                }}
            >
                {title}
                <div
                    className={`accordion__icon ${iconClass}`}
                    aria-hidden="true">
                </div>
            </Button>

            <section
                className="accordion__text"
                id={`${id}-panel`}
                aria-labelledby={`${id}-header`}
                hidden={!isExpanded}
            >
                {children}
            </section>

        </div>
    );
}


export default Accordion;