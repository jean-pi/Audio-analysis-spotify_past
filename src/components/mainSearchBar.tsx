
import barStyles from "../sass/stylesComponents/mainSearchBar.module.scss"

export default function MainSearchBar() {


  return (
    <div>
        <img src="" alt="" />
        <input className={barStyles.inputText} type="text" id="bar-search" autoComplete="off" name="mainSearchBar" placeholder="What do you want to analyze?"  />
    </div>
  )
}