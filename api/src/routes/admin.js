import express from 'express';
import userController from '../controllers/UserController';
import roleMiddleware from '../middleware/roleMiddleware';
const router = express.Router();

// get all admins
router.get('/admins', roleMiddleware.verifyAdmin, userController.handleGetAllAdmins);

// create new employee
router.post('/register/employee', roleMiddleware.verifyAdmin, userController.handleCreateNewEmployee);

// get all employees
router.get('/employees', roleMiddleware.verifyAdmin, userController.handleGetAllEmployees);

// delete employee
router.delete('/employees/:employeeId', roleMiddleware.verifyAdmin, userController.handleDeleteEmployeeById);

// get all members
router.get('/members', roleMiddleware.verifyAdmin, userController.handleGetAllMembers);

// delete user
router.delete('/members/:memberId', roleMiddleware.verifyAdmin, userController.handleDeleteMemberById);

// update status account Member or Employee
router.put('/:id', roleMiddleware.verifyAdminOrEmployee, userController.handleUpdateMemberAndEmployeeStatus);

// update member role to siver or golden
router.put('/members/:id', roleMiddleware.verifyAdmin, userController.handleUpdateMemberRole);





export default router;
