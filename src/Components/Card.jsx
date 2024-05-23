const Card = ({usuario}) => {
  return (
    <>
    <h3>Tu artista favorito es {usuario.artista}?</h3>
    <h3>Que buen gusto!</h3>
    <h4>Pero su peor album es {usuario.album}...</h4>
    </>
  )
}

export default Card