import React from 'react'
import MenuList from './MenuList'

const TreeView = ({menus =[]}) => {



  return (
    <div className='bg-blue-700 min-h-screen w-80'>
        <MenuList list={menus}/>
    </div>
  )
}

export default TreeView