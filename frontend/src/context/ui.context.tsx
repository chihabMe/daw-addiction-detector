import { ReactNode, createContext, useEffect, useState } from "react";
type IQuestionType = "list" | "grid";
type ITheme = "dark"|"light";
interface UiContextInitialState {
  theme: ITheme;
  questionMode: IQuestionType;
  changeThemeToDark:()=>void;
  changeThemeToLight:()=>void;
  changeQuestionModeToList:()=>void;
  changeQuestionModeToGrid:()=>void;
}
const initialState: UiContextInitialState = {
  theme: localStorage.getItem("theme") as ITheme??"light",
  questionMode:localStorage.getItem("questionMode") as IQuestionType??"list",
  changeThemeToDark:()=>{},
  changeThemeToLight:()=>{},
  changeQuestionModeToList:()=>{},
  changeQuestionModeToGrid:()=>{},

};

export const uiContext = createContext(initialState);


export const UiContextProvider = ({children}:{children:ReactNode})=>{
  const [theme,setTheme] = useState(initialState.theme)
  const [questionMode,setQuestionMode] = useState(initialState.questionMode)

  const changeThemeToDark = ()=>setTheme("dark")
  const changeThemeToLight = ()=>setTheme("light")
  const changeQuestionModeToGrid=()=>setQuestionMode("grid")
  const changeQuestionModeToList=()=>setQuestionMode("list")

  // useEffect(()=>{
  //     const questionModeFromLocalStorage = localStorage.getItem("questionMode")
  //   console.log(questionMode)
  //     if(questionModeFromLocalStorage)
  //       setQuestionMode(questionModeFromLocalStorage as IQuestionType)
  //
  // },[])

  useEffect(()=>{
    localStorage.setItem("questionMode",questionMode)

  },[questionMode])
  useEffect(()=>{
    localStorage.setItem("theme",theme)
  },[theme])

  const value  = {
    theme,
    questionMode,
    changeThemeToLight,
    changeThemeToDark,
    changeQuestionModeToList,
    changeQuestionModeToGrid
  }
  return(

    <uiContext.Provider value={value}>
    {children}
  </uiContext.Provider>
  )
}
