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

// delete employee
router.delete('/employees/:employeeId', userController.handleDeleteEmployeeById);

// get all members
router.get('/members', userController.handleGetAllMembers);

// delete user
router.delete('/members/:memberId', userController.handleDeleteMemberById);

// update status account Member or Employee
router.put('/:id', userController.handleUpdateMemberAndEmployeeStatus);

// update member role to siver or golden
router.put('/members/:id', userController.handleUpdateMemberRole);

export default router;
