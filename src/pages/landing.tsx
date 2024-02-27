import HydraBackgroung from "../components/hydraBackgroung";
import LandingLayerMainText from "../components/layersComponents/landingLayer_mainText";
import LandingLayer_signBtn_PrivacyMssg from "../components/layersComponents/landingLayer_signBtnPrivacyMsg"

import stylesPage from "../sass/pagesStyles/landinPage.module.scss"

export function Landing() {


  return (
    <div className={stylesPage.container}>
      <HydraBackgroung/>

      <LandingLayerMainText/>
      <LandingLayer_signBtn_PrivacyMssg/>

    </div>
  )
}
