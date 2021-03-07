import { ChangeEvent, useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";

interface IFormValues {
  bookmarkLabel: string;
  bookmarkUrl: string;
}

const initialFormValues: IFormValues = {
  bookmarkLabel: "",
  bookmarkUrl: "",
};

const BookmarkForm = () => {

  const [formValues, setFormValues] = useState<IFormValues>(initialFormValues);

  const handleFormValuesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleFormSubmit = () => {
    console.log(formValues);
  }

  return (
    <div className="rl-landing">
      <div className="rl-form-grid">
        <div className="rl-grid-item">
          <FormInput
            id={"bookmarkLabel"}
            value={formValues.bookmarkLabel}
            handleChange={handleFormValuesChange}
            placeholder={"Bookmark Label"}
          />
        </div>
        <div className="rl-grid-item">
          <FormInput
            id={"bookmarkUrl"}
            value={formValues.bookmarkUrl}
            handleChange={handleFormValuesChange}
            placeholder={"URL"}
          />
        </div>
        <div className="rl-grid-item">
          <Button label={"Add"} handleClick={() => handleFormSubmit()} />
        </div>
      </div>
    </div>
  );
};

export default BookmarkForm;
