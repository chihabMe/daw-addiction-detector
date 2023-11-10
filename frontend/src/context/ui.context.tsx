import { ReactNode, createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
type IQuestionType = "list" | "grid";
type ITheme = "dark"|"light";
type IQuestionDisplayType = "letters"|"none";
interface UiContextInitialState {
  theme: ITheme;
  questionMode: IQuestionType;
  questionDisplayType:IQuestionDisplayType,
  changeThemeToDark:()=>void;
  changeThemeToLight:()=>void;
  changeQuestionModeToList:()=>void;
  changeQuestionModeToGrid:()=>void;

  toggleQuestionsDisplaytype:()=>void;
}

const initialState: UiContextInitialState = {
  theme: localStorage.getItem("theme") as ITheme??"light",
  questionMode:localStorage.getItem("questionMode") as IQuestionType??"list",
  questionDisplayType:localStorage.getItem("questionDisplayType") as IQuestionDisplayType??"letters",
  changeThemeToDark:()=>{},
  changeThemeToLight:()=>{},
  changeQuestionModeToList:()=>{},
  changeQuestionModeToGrid:()=>{},
  toggleQuestionsDisplaytype:()=>{},

};

export const uiContext = createContext(initialState);


export const UiContextProvider = ({children}:{children:ReactNode})=>{
  const [theme,setTheme] = useState(initialState.theme)
  const [questionMode,setQuestionMode] = useState(initialState.questionMode)
  const [questionDisplayType,setQuestionDisplayType] = useState(initialState.questionDisplayType)

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

  const toggleQuestionsDisplaytype=()=>{
    toast.success("hide letters")
    setQuestionDisplayType(prev=>{
      const action = prev=="letters"?"show":"hide"
      toast(`${action} letters`)
      return prev=="letters"?"none":"letters"
    })
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
    changeQuestionModeToGrid,
    toggleQuestionsDisplaytype,
    questionDisplayType
  }
  return(

    <uiContext.Provider value={value}>
    {children}
  </uiContext.Provider>
  )
}
