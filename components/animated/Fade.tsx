import React from 'react'


export type FadeProps = {
    className?: string,
    children?: React.ReactNode
}

const FadeComp = require('react-reveal/Fade');


function Fade({className, children, ...props}: FadeProps & any) {
  return (
    <div className={className}>
        <FadeComp {...props}>
            {children}
        </FadeComp>
    </div>
  )
}

export default Fade