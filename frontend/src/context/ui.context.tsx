import { ReactNode, createContext, useEffect, useState } from "react";

import toast from "react-hot-toast";

type IQuestionType = "list" | "grid";
type ITheme = "dark" | "light";
type IQuestionDisplayType = "letters" | "none";
interface UiContextInitialState {
  theme: ITheme;
  questionMode: IQuestionType;
  questionDisplayType: IQuestionDisplayType;
  toggleThemeMode: () => void;
  changeQuestionModeToList: () => void;
  changeQuestionModeToGrid: () => void;

  toggleQuestionsDisplaytype: () => void;
}

const initialState: UiContextInitialState = {
  theme: (localStorage.getItem("theme") as ITheme) ?? "light",
  questionMode:
    (localStorage.getItem("questionMode") as IQuestionType) ?? "list",
  questionDisplayType:
    (localStorage.getItem("questionDisplayType") as IQuestionDisplayType) ??
    "letters",
  toggleThemeMode: () => {},
  changeQuestionModeToList: () => {},
  changeQuestionModeToGrid: () => {},
  toggleQuestionsDisplaytype: () => {},
};

export const uiContext = createContext(initialState);

export const UiContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [questionMode, setQuestionMode] = useState(initialState.questionMode);
  const [questionDisplayType, setQuestionDisplayType] = useState(
    initialState.questionDisplayType,
  );

  const toggleThemeMode = () => {
    setTheme((p) => {
      const isLight = p == "light";
      isLight
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
      const nextTheme = isLight ? "dark" : "light";
      toast.success(`${nextTheme} on`);
      return nextTheme;
    });
  };
  const changeQuestionModeToGrid = () => {
    setQuestionMode((prev) => {
      if (prev != "grid") toast.success("grid display");
      return "grid";
    });
  };
  const changeQuestionModeToList = () => {
    setQuestionMode((prev) => {
      if (prev != "list") toast.success("list display");
      return "list";
    });
  };

  const toggleQuestionsDisplaytype = () => {
    setQuestionDisplayType((prev) => {
      const action = prev == "letters" ? "show" : "hide";
      toast(`${action} letters`);
      return prev == "letters" ? "none" : "letters";
    });
  };

  useEffect(() => {
    localStorage.setItem("questionMode", questionMode);
  }, [questionMode]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    storedTheme == "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, []);

  const value = {
    theme,
    questionMode,
    toggleThemeMode,
    changeQuestionModeToList,
    changeQuestionModeToGrid,
    toggleQuestionsDisplaytype,
    questionDisplayType,
  };
  return <uiContext.Provider value={value}>{children}</uiContext.Provider>;
};
