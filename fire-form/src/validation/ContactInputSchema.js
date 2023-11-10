import * as yup from "yup";

const SUPPORTED_FORMATS = ["image/png", "image/jpeg"];
const MAX_FILE_SIZE = 5000000; // 5MB
const MAX_NAME_LENGTH = 200;
const MAX_EMAIL_LENGTH = 100;
const MAX_BIO_LENGTH = 800;
const url =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/;

const schemasByTypes = {
  text: yup
    .string()
    .required("Hey! We need this field.")
    .max(MAX_NAME_LENGTH, "✍️ Stay under 200 characters, please."),
  email: yup
    .string()
    .email("That email doesn't seem right.")
    .required("We need your email here!")
    .max(
      MAX_EMAIL_LENGTH,
      "Wow, that's a long email! Can we keep it under 100 characters?"
    ),
  date: yup.date().required("Hey! this date is imporant"),
  select: yup.string().required("Wow! Looks like you skipped something"),
  file: yup
    .mixed()
    .test(
      "fileSize",
      "Wow, that's a big file! Try to keep it under 5MB.",
      (value) => !value || (value && value.size <= MAX_FILE_SIZE)
    )
    .test(
      "fileType",
      "🖼️ Wow! We only accept .png and .jpeg file types.",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  url: yup
    .string()
    .matches(url, "💻 Hmm... That doesn't seem to be a valid link.")
    .notRequired(),
  textarea: yup
    .string()
    .required("🗣️ We need this information.")
    .max(
      MAX_BIO_LENGTH,
      `📘 Wow, that's a lot of information! Try to keep it under ${MAX_BIO_LENGTH} characters.`
    ),
};

export const schemaConstructor = (name, type) => {
  const schemaType = schemasByTypes[type];
  if (!schemaType) {
    throw new Error(`Unsupported type: ${type}`);
  }
  return yup.object().shape({
    [name]: schemaType,
  });
};
