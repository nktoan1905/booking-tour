import UserRole from './roleConst';

const UserHelpers = {
	checkIsMember: (user) => {
		if (user.roleId === UserRole.MEMBERS) return 1;
		else if (user.roleId === UserRole.GOLDER_MEMBER) return 1;
		else if (user.roleId === UserRole.SLIVER_MEMBER) return 1;
		else return 0;
	},
};
export default UserHelpers;
