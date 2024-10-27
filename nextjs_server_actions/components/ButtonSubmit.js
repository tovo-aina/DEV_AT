"use client";

import { useFormStatus } from "react-dom"; // Assurez-vous que c'est le bon module

const ButtonSubmit = ({ value }) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading" : value}
    </button>
  );
};

export default ButtonSubmit;
