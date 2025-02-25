import Input from './components/Input';
import Button from './components/Button';


import { Container, Content, Row,  } from './styles'
import{ useState } from 'react';

const App = () => {
  const [curentNumber, setCurrentNumer] = useState('0');

  const handleClear = () => {
    setCurrentNumer('0')
  };

  const handleAddNumer = (number) => {
      setCurrentNumer(prev => `${number} ${prev === '0' ? '' : prev}`)
  }
  return (
    <Container>
       <Content>
         <Input value={curentNumber}/>
         <Row>
           <Button label="X"/>
           <Button label="/"/>
           <Button label="C" onClick={handleClear}/>
           <Button label="x"/>
           </Row>
         <Row>
           <Button label="7" onClick={() => handleAddNumer('7')}/>
           <Button label="8" onClick={() => handleAddNumer('8')}/>
           <Button label="9" onClick={() => handleAddNumer('9')}/>
           <Button label="-" onClick={() => handleAddNumer('-')}/>
           </Row>
          <Row>
           <Button label="4" onClick={() => handleAddNumer('4')}/>
           <Button label="5" onClick={() => handleAddNumer('5')}/>
           <Button label="6" onClick={() => handleAddNumer('6')}/>
           <Button label="+" onClick={() => handleAddNumer('+')}/>
           </Row>
           <Row>
           <Button label="1" onClick={() => handleAddNumer('1')}/>
           <Button label="2" onClick={() => handleAddNumer('2')}/>
           <Button label="3"onClick={() => handleAddNumer('3')}/>
           <Button label="=" onClick={() => handleAddNumer('=')}/>
           </Row>
           
       </Content>
    </Container>
  );
}

export default App;
