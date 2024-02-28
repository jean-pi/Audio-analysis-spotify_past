import { CONNECT_SPOTIFY_ACCOUNT, IMG_SPOTIFY } from "../constants/actionTypes";
import ConnectButtonStyles from "../sass/stylesComponents/ConnectButton.module.scss"

export default function ConnectButton() {

  const event = () =>{
 
  }

  return (
    <>
      <button className={ConnectButtonStyles.button} onClick={event} >
          <img className={ConnectButtonStyles.button_img} src={IMG_SPOTIFY.url} alt={IMG_SPOTIFY.alt} />
          <h4 className={ConnectButtonStyles.button_h4}>{CONNECT_SPOTIFY_ACCOUNT}</h4>
      </button>
    </>
  )
}