export const EDIT = "EDIT";

export const edit = user => ({
  type: EDIT,
  user,
  currentUser
});
