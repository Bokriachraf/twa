import React, { useState } from 'react'
import { LoginFormF,LoginFormC } from './LoginForm'

export default function App1() {
    const [visible,setVisible]=useState(true);
  return (
    <div>
        {visible?<>
            <LoginFormC/>
            <LoginFormF/>
        </>: null}
        <button onClick={() => setVisible(!visible)}>cliquerici</button>
    </div>
  )
}
