import Carousel from './Carousel';

function App() {

  const images = [
    './1.png',
    './2.png',
    './3.png',
    './4.png',
    './5.png',
    './6.png',
  ];
  
  const fallbackImage = './0.png';

  return (
    <div className="App">
      <Carousel images={images} fallbackImage={fallbackImage} />
    </div>
  );
}

export default App
