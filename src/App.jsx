import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Appheader from './components/app-header';
import { routes } from './router'
const App = memo(() => {
  console.log(111);
  return (
    <div className='app'>
      <div className="header">
        <Appheader/>
      </div>
      <div className="content">

        <Suspense fallback={ <div>loading...</div> }>
        { useRoutes(routes) }
        </Suspense>
      </div>
      <div className="footer">footer</div>
    </div>
  )
})

export default App