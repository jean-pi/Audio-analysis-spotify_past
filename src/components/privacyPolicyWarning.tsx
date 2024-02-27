
import { TEXT_WARNING_PRIVACY } from "../constants/actionTypes"
import { LINK_WARNING_PRIVACY } from "../constants/actionTypes"

import privacyWarningStyles from "../sass/stylesComponents/privacyPolicyWarning.module.scss"


export default function PrivacyPolicyWarning() {
  return (
    <p tabIndex={0} className={privacyWarningStyles.p}>
        {TEXT_WARNING_PRIVACY}
        <a className={privacyWarningStyles.p_a} href={LINK_WARNING_PRIVACY.url} target="_blank">{LINK_WARNING_PRIVACY.text}</a>
    </p>
  )
}