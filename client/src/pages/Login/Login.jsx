import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/request/authApiRequest';
import { toast } from 'react-toastify';
export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const nav = useNavigate();
	const loginSubmit = async (e) => {
		await loginUser({ email, password }, dispatch, nav, toast);
	};
	return (
		<div
			className="d-flex flex-column justify-content-center align-items-center"
			style={{
				height: '100%',
				backgroundImage: `url("/assets/images/login_background.jpg")`,
				backgroundSize: '100% 100%',
			}}>
			<div
				className="d-flex flex-column align-items-center justify-content-center flex-grow-1"
				style={{ width: '360px' }}>
				<h1 className="my-4 text-center viceph-color text-capitalize sc-color" style={{ fontWeight: 'bold' }}>
					login
				</h1>
				<div className={`mb-3 d-flex align-items-center justify-content-between input-group form-control border`}>
					<input
						type="email"
						className="border-0 flex-grow-1"
						value={email}
						placeholder="Email"
						autoComplete="off"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === 'Enter') loginSubmit(e);
						}}
						style={{ height: '45px', outline: 'none' }}
					/>
					<span className="material-symbols-outlined">email</span>
				</div>
				<div
					className={`mb-3 d-flex align-items-center justify-content-between input-group border form-control border`}>
					<input
						type="password"
						className="border-0 flex-grow-1"
						value={password}
						placeholder="Password"
						autoComplete="off"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === 'Enter') loginSubmit(e);
						}}
						style={{ height: '45px', outline: 'none' }}
					/>
					<span className="material-symbols-outlined">password</span>
				</div>
				<div className="d-flex justify-content-end mb-4 text-capitalize" style={{ width: '100%' }}>
					<a className="text-capitalize" href="#">
						forgot Password?
					</a>
				</div>
				<div className="mt-3 d-flex align-items-center justify-content-center">
					<hr style={{ width: '140px' }} />
					<span className="mx-3 text-uppercase">or</span>
					<hr style={{ width: '140px' }} />
				</div>
				<div className="mt-3 d-flex flex-row justify-content-end w-100">
					<span className="me-1">Don't have an account</span>
					<a href="/register" className="text-capitalize">
						register
					</a>
				</div>
			</div>
		</div>
	);
};
