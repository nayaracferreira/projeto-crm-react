import React from 'react'

import '../../styles/style.css';
import {AppHeader, AppFooter} from '../organisms';

export default function Default(props) {
  return (
    <body>   
   
    {props.children}
    <AppFooter></AppFooter>
           

</body>
  )
}
