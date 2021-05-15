import React from 'react'
import {ToolTipContainer, ToolTipText} from "./style"
function ToolTip({children, ...restProps}) {
    return (
        <ToolTipContainer {...restProps}>
           {children}
        </ToolTipContainer>
    )
}

ToolTip.ToolTipText = function ToolTipToolTipText({ children,...restProps}){
    return  <ToolTipText  {...restProps}>{children}</ToolTipText>
}

export default ToolTip
