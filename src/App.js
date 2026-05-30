import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="img-container">
          <img src={require('./images/img1.jpg')} alt="azul"/>
          <a href="https://wa.me/+556596023456" class="whatsapp-btn" aria-label="Chat on WhatsApp"/>
        </div>
        <img src={require('./images/img2.jpg')} className="img-2" alt="cristo"/>
      </header>
    </div>
  );
}

export default App;
