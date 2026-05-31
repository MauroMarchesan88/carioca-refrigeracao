import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="img-container">
          <img src={require('./images/img1.jpg')} alt="azul"/>
          <a href="https://wa.me/+556596023456" className="whatsapp-btn" aria-label="Chat on WhatsApp"/>
        </div>
        <div className="img-container">
          <img src={require('./images/img2.jpg')} alt="cristo"/>
          <a href="https://wa.me/+556596023456" className="whatsapp-btn-2" aria-label="Chat on WhatsApp"/>
        </div>
      </header>
    </div>
  );
}

export default App;
