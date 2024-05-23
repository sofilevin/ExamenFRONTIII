import { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";

const Form = () => {

  const [usuario, setUsuario] = useState({
    artista: "",
    album: "",
  });

  const [showCard, setShowCard] = useState(false);
  const [showError, setShowError] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  setShowCard(false)
  setShowError(false)
  const regexEspacioInicial = /^\s/
  if(usuario.artista.trim().length > 2 && !regexEspacioInicial.test(usuario.artista) && usuario.album.trim().length > 5){
    setShowCard(true)
  }else{
    setShowError(true)
  }
}

  return (
    <div>
      <h2>Vamos a testar tu gusto musical!</h2>
      <form onSubmit={handleSubmit}>
        <label>Artista favorito</label>
        <input type="text" value={usuario.artista} onChange={(e) => setUsuario({ ...usuario, artista: e.target.value })}/>
        <label>Album favorito del mismo</label>
        <input type="text" value={usuario.album} onChange={(e) => setUsuario({ ...usuario, album: e.target.value })}/>
        <button>Enviar información para ser juzgado</button>
      </form>
      {showCard && <Card usuario={usuario}/>}
      {showError && <ErrorMessage/>}
    </div>
  )
}

export default Form