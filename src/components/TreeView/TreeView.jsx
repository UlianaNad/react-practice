import React from 'react'
import MenuList from './MenuList'

const TreeView = ({menus =[]}) => {



  return (
    <div className='container'>
        <MenuList list={menus}/>
    </div>
  )
}

export default TreeView