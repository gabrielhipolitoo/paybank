import { Children, createContext, ReactNode, useState } from "react";

type PropsContenxt = {
  children: ReactNode;
};

type TypeValue = {
  formState: number;
  nextButton: () => void;
  previousButton: () => void;
};

export const FormStateContext = createContext<TypeValue>({} as TypeValue);
export default function FormStepProvider({ children }: PropsContenxt) {
  const [formState, setFormState] = useState<number>(1);
  const countChildrens = Children.count(children);
  function nextButton() {
    if (formState <= countChildrens) setFormState(formState + 1);
  }

  function previousButton() {
    if (formState > 1) setFormState(formState - 1);
  }

  console.log(Children.count(children));

  return (
    <FormStateContext.Provider
      value={{ formState, nextButton, previousButton }}
    >
      {children}
    </FormStateContext.Provider>
  );
}
