import PrivacyPolicyWarning from "../privacyPolicyWarning"
import ConnectButton from "../connetButton"

import landingconnectAcountLayerStyles from "../../sass/layers/landing_connectLayer.module.scss"


function a(){
  console.log("a")
}

export default function LandingLayer_signBtn_PrivacyMssg() {
  return (
    <div className={landingconnectAcountLayerStyles.container}>

    <ConnectButton/>

    <PrivacyPolicyWarning/>
    
    </div>
  )
}