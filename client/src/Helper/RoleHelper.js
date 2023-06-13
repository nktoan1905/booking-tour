export const getRoleName = (roleId) => {
  switch (roleId) {
    case 1:
      return "Admin";
    case 2:
      return "Emloyee";
    case 3:
      return "Member";
    case 4:
      return "Siver Member";
    case 5:
      return "Golden Member";
    default:
      break;
  }
};
