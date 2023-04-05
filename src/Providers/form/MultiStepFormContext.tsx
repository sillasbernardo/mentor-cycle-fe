import { createContext, useReducer, useMemo } from "react";

export enum ActionType {
  UPDATE_FORM_DATA = "UPDATE_FORM_DATA",
  UPDATE_GLOBAL = "UPDATE_GLOBAL",
}

interface IAction {
  type: ActionType;
  payload?: any;
}

export interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword?: string;
  state: string;
  country: string;
  city: string;
  birthDate: string | null;
  skills: string[];
  linkedin: string;
  github: string;
  description: string;
  isMentor: boolean;
  currentStep?: number;
}

export interface IMultiStepFormContext {
  dispatch: (action: IAction) => void;
  currentStep: number;
  formData: IFormData;
  states: any[];
  cities: any[];
}

interface MultiStepFormProviderProps {
  children: React.ReactNode;
}

const initialState = {
  currentStep: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    state: "",
    country: "Brasil",
    city: "",
    birthDate: null,
    skills: [],
    linkedin: "",
    github: "",
    description: "",
    isMentor: false,
    currentStep: 1,
  },
  cities: [],
  states: [],
};

const actionHandlers: Record<
  string,
  (state: typeof initialState, action: IAction) => typeof initialState
> = {
  [ActionType.UPDATE_FORM_DATA]: (state, action) => ({
    ...state,
    formData: { ...state.formData, ...action.payload },
  }),
  [ActionType.UPDATE_GLOBAL]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
};

const reducer = (state: typeof initialState, action: IAction) => {
  const handler = actionHandlers[action.type] || ((state) => state);
  return handler(state, action);
};

export const MultiStepFormContext = createContext<IMultiStepFormContext>(
  {} as IMultiStepFormContext
);

export const MultiStepFormProvider = ({
  children,
}: MultiStepFormProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MultiStepFormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MultiStepFormContext.Provider>
  );
};
