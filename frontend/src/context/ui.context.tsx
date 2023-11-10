import { ReactNode, createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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

  const changeThemeToDark = ()=>{
    toast.success("dark theme on")
  setTheme("dark")
  }
  const changeThemeToLight = ()=>{
    toast.success("light theme on")
  setTheme("light")
  }
  const changeQuestionModeToGrid=()=>{
    toast.success("grid display")
  setQuestionMode("grid")
  }
  const changeQuestionModeToList=()=>{
    toast.success("list display")
  setQuestionMode("list")
  }


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
