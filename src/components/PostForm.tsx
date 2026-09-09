import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import type { PostFormValues } from "../types/post.types";

import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

interface PostFormProps {
  initialValues?: PostFormValues;
  submitText: string;
  submitting: boolean;
  serverError?: string;
  onSubmit: (values: PostFormValues) => Promise<void>;
}

const emptyForm: PostFormValues = {
  title: "",
  body: "",
  userId: "",
};

function PostForm({initialValues = emptyForm, submitText, submitting, serverError, onSubmit,}: PostFormProps) 
{
  const [formData, setFormData] =
    useState<PostFormValues>(initialValues);

  const [validationError, setValidationError] =
    useState<string>("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) 
  {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) 
  {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit( event: FormEvent<HTMLFormElement>) 
  {
    event.preventDefault();

    setValidationError("");

    if (!formData.title.trim() || !formData.body.trim() || !formData.userId.trim()) 
    {
      setValidationError("Please complete all fields.");

      return;
    }

    if (Number(formData.userId) <= 0) {
      setValidationError("User ID must be greater than 0.");

      return;
    }

    await onSubmit(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      {validationError && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
          {validationError}
        </div>
      )}

      {serverError && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
          {serverError}
        </div>
      )}

      <Input
        label="Post Title"
        name="title"
        value={formData.title}
        placeholder="Enter post title"
        onChange={handleInputChange}
      />

      <Textarea
        label="Post Body"
        name="body"
        value={formData.body}
        placeholder="Write your post..."
        onChange={handleTextareaChange}
      />

      <Input
        label="User ID"
        name="userId"
        type="number"
        value={formData.userId}
        placeholder="Enter user ID"
        onChange={handleInputChange}
      />

      <Button
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Please wait..." : submitText}
      </Button>
    </form>
  );
}

export default PostForm;