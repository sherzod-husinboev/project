import * as React from "react";
const LogoIcon = (props) => (
    <svg
        width={141}
        height={46}
        viewBox='0 0 141 46'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        {...props}
    >
        <rect width={141} height={46} fill='url(#pattern0_6804_939)' />
        <defs>
            <pattern
                id='pattern0_6804_939'
                patternContentUnits='objectBoundingBox'
                width={1}
                height={1}
            >
                <use
                    xlinkHref='#image0_6804_939'
                    transform='matrix(0.00666667 0 0 0.0204348 0 -0.000652174)'
                />
            </pattern>
            <image
                id='image0_6804_939'
                width={150}
                height={49}
                xlinkHref='data:image/png;base64,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'
            />
        </defs>
    </svg>
);
export default LogoIcon;
