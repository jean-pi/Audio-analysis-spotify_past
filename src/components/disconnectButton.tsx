import {DISCONNECT_SPOTIFY_ACCOUNT, IMG_SPOTIFY } from "../constants/actionTypes";
import disconnectButtonStyles from "../sass/stylesComponents/disconnectButton.module.scss"





export default function DisconnectButton() {

  const event = () =>{
 
  }

  return (
    <>
      <button className={disconnectButtonStyles.button} onClick={event} >
          <img className={disconnectButtonStyles.button_img} src={IMG_SPOTIFY.url} alt={IMG_SPOTIFY.alt} />
          <h4 className={disconnectButtonStyles.button_h4}>{DISCONNECT_SPOTIFY_ACCOUNT}</h4>
      </button>
    </>
  )
}