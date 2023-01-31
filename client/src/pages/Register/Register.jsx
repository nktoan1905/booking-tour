import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/common/Header';
import CommnonLayout from '../../components/layout/CommnonLayout';
import { registerUser } from '../../redux/request/authApiRequest';

export const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const dispatch = useDispatch();
	const nav = useNavigate();
	const onRegistration = async (e) => {
		await registerUser({ email, password }, dispatch, nav, toast);
	};
	return (
		<CommnonLayout>
			<Header></Header>
			<section className="h-full flex justify-center items-center">
				<div className="container px-6 py-12 h-full ">
					<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
						<div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
								className="w-full"
								alt="Phone image"
							/>
						</div>
						<div className="md:w-8/12 lg:w-5/12 lg:ml-20">
							<div className="text-center text-3xl font-bold mb-4">Đăng ký hội viên</div>
							<form>
								<div className="mb-6">
									<label htmlFor="email" className="font-blod mb-3">
										Email
									</label>
									(<span className="text-red-600">*</span>)
									<input
										id="email"
										type="text"
										name="Email"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Địa chỉ Email"
									/>
								</div>

								<div className="mb-6">
									<label htmlFor="password" className="font-blod mb-3">
										Password
									</label>
									(<span className="text-red-600">*</span>)
									<input
										id="password"
										type="password"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Password"
									/>
								</div>
								<div className="mb-6">
									<label htmlFor="password" className="font-blod mb-3">
										Xác nhận Password
									</label>
									(<span className="text-red-600">*</span>)
									<input
										id="password"
										type="password"
										className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
										placeholder="Password"
									/>
								</div>
								<button
									type="submit"
									className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
									data-mdb-ripple="true"
									data-mdb-ripple-color="light">
									Đăng ký
								</button>

								<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
									<p className="text-center font-semibold mx-4 mb-0">
										Nếu đã có tài khoản thì click vào{' '}
										<Link to="/login" class="font-medium text-blue-600 hover:underline dark:text-primary-500">
											đây
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</CommnonLayout>
	);
};
