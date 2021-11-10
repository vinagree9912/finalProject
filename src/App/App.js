import logo from '../logo.svg';
import './App.css';
import {AppUI} from "./AppUI";

function App() {
  const columnasPantalla = [
    {text: 'TIME'},
    {text: 'DESTINATION'},
    {text: 'FLIGHT'},
    {text: 'GATE'},
    {text: 'REMARKS'},
  ];
  const items = [
    {time: '12:50', destination:"MADRID",flight:"BA 017",gate: 22, remarks:"ARRIVAL"  },
    {time: '11:00', destination:"BOGOTA",flight:"BA 017",gate: 22, remarks:"ON TIME"  },
    {time: '13:50', destination:"CHINA",flight:"BA 017",gate: 22, remarks:"CANCELLED"  },
    {time: '16:24', destination:"ROME",flight:"BA 017",gate: 22, remarks:"ARRIVAL"  },
    {time: '15:31', destination:"PARIS",flight:"BA 017",gate: 22, remarks:"DELAYED"  },
  ]
  const [searchValue,setSearchValue] = React.useState('')
  return (
     <AppUI columnasPantalla = {columnasPantalla}
            items = {items}
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}

     />
  );
}

export default App;
