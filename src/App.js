import './App.css';
import Video from "./pages/video.js";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Paulo"
          description="Brecker o goleiro"
          music="Musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={333}
          messages={224}
          shares={301}
          name="Predo"
          description="Gato saltando"
          music="Musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
      </div>
    </div>
  );
}
export default App;
