export const validate = (name, email, password, isSignIn) => {
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
    return "Please enter valid email";
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password))
    return "Your password must contain between 4 and 60 characters.";
  if (!isSignIn && name === "") return "Please enter name";
  return null;
};
