
import { ICON_FIND, PLACEHOLDER_TEXT } from "../constants/actionTypes"
import barStyles from "../sass/stylesComponents/mainSearchBar.module.scss"

export default function MainSearchBar() {


  return (
    <div className={barStyles.barSearchContainer}>
        <img className={barStyles.barSearchContainer_img} src={ICON_FIND.url} alt={ICON_FIND.alt} />
        <input className={barStyles.barSearchContainer_inputText} type="text" id="bar-search" autoComplete="off" name="mainSearchBar" placeholder={PLACEHOLDER_TEXT} />
    </div>
  )
}