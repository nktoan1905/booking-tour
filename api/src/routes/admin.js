import express from 'express';
import userController from '../controllers/userController';
import roleMiddleware from '../middleware/roleMiddleware';
const router = express.Router();

// get all admins
router.use(roleMiddleware.verifyAdmin);

router.get('/admins', userController.handleGetAllAdmins);

// create new employee
router.post('/register/employee', userController.handleCreateNewEmployee);

// get all employees
router.get('/employees', userController.handleGetAllEmployees);

// get all members
router.get('/members', userController.handleGetAllMembers);

// delete user
router.delete('/:userId', userController.handleDeleteUserById);

// update status account Member or Employee
router.put('/role/:userId', userController.handleUpdateMemberAndEmployeeStatus);

// update member role to siver or golden
router.put('/status/:userId', userController.handleUpdateUserRole);

export default router;
