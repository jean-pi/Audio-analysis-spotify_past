
import { TEXT_WARNING_PRIVACY } from "../constants/actionTypes"
import { LINK_WARNING_PRIVACY } from "../constants/actionTypes"




export default function PrivacyPolicyWarning() {
  return (
    <p>
        {TEXT_WARNING_PRIVACY}
        <a href={LINK_WARNING_PRIVACY.url} target="_blank">{LINK_WARNING_PRIVACY.text}</a>
    </p>
  )
}