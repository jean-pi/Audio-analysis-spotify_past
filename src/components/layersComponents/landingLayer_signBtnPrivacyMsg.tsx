import PrivacyPolicyWarning from "../privacyPolicyWarning"
import SignButton from "../signButton"
import { CONNECT_SPOTIFY_ACCOUNT } from "../../constants/actionTypes"

import landingconnectAcountLayerStyles from "../../sass/layers/landing_connectLayer.module.scss"


function a(){
  console.log("a")
}

export default function LandingLayer_signBtn_PrivacyMssg() {
  return (
    <div className={landingconnectAcountLayerStyles.container}>

    <SignButton  
      text = {CONNECT_SPOTIFY_ACCOUNT}
      event = { () => console.log("sign")} 
    />

    <PrivacyPolicyWarning/>
    
    </div>
  )
}