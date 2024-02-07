import React from 'react'
import {ThemedLayoutV2} from "@refinedev/antd";
import Header from './header';
 
export const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
        Header={Header} 
        Tilte={(titleProps)=> <ThemedTitleV2 {...titleProps} text="Refine"/>}   
    >
        {children}
    </ThemedLayoutV2>
  )
}

