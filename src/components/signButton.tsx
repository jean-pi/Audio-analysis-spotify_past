import { CONNECT_SPOTIFY_ACCOUNT } from "../constants/actionTypes";
import { IMG_SPOTIFY } from "../constants/actionTypes";


export default function SignButton() {
  return (
    <>
        <button >
            <img src={IMG_SPOTIFY.url} alt={IMG_SPOTIFY.alt} />
            <h4>{CONNECT_SPOTIFY_ACCOUNT}</h4>
        </button>
    </>
  )
}