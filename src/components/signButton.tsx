import { IMG_SPOTIFY } from "../constants/actionTypes";
import signButtonStyles from "../sass/stylesComponents/signButton.module.scss"


interface signButtonProps{
    text : string,
    event: () => void
}


export default function SignButton({text, event}: signButtonProps) {

  return (
    <>
      <button className={signButtonStyles.button} onClick={event} >
          <img className={signButtonStyles.button_img} src={IMG_SPOTIFY.url} alt={IMG_SPOTIFY.alt} />
          <h4 className={signButtonStyles.button_h4}>{text}</h4>
      </button>
    </>
  )
}