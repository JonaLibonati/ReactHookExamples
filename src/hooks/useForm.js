
import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  const onInputChangeWithHook = ({target})=> {
    const {name, value} = target;

    setFormState(
      {
        ... formState,
        [name] : value,
      }
    );
  }

  return {
    formState,
    onInputChangeWithHook,
  }
}
