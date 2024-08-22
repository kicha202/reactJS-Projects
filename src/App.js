import react from 'react';
import Data from './Components/project/Data.json'
import { Home } from './Components/project/Home';


function App(){
  return( 

<>
<Home items={Data}/>
</>

  );
}

export default App;