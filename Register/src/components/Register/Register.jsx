import { memo, useState } from "react"
import myImage from '../../assets/images/fe94b97e-7a61-4321-b5ec-15421253c232.jpeg'
import './Register.scss'
import { useFormik, Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import date from "../../data/date.json";


const Register = () => {
    const [toggle1, setToggle1] = useState(false);

    const handleToggle1 = () => {
        setToggle1(!toggle1);
    }
    const [toggle2, setToggle2] = useState(false);

    const handleToggle2 = () => {
        setToggle2(!toggle2);
    }
    return (
        <div className="register">
            <div className="register-search">
                <div className="register-search-left">
                    <a href="">Settings</a>
                    <i className="fa-solid fa-angle-right"></i>
                    <a href="">User Profile</a>
                </div>
                <div className="register-search-center">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="search" id="search" placeholder="Search...." />
                </div>
                <div className="register-search-right">
                    <i className="fa-regular fa-bell"></i>
                    <img src={myImage} alt="" />
                </div>
            </div>
            <div className="register-content">
                <div className="register-content-list">
                    <div className="img">
                        <img src={myImage} style={{ width: '100px', height: '100px' }} alt="" />
                        <i className="fa-solid fa-pen"></i>
                    </div>
                    <div className="list">
                        <div className="list-content">
                            <i class="fa-regular fa-user"></i>
                            <span><strong>User Infor</strong></span>
                        </div>
                        <div className="list-content">
                            <i class="fa-solid fa-clipboard-list"></i>
                            <span><strong>Dashboard</strong></span>
                        </div>
                        <div className="list-content">
                            <i class="fa-regular fa-heart"></i>
                            <span><strong>Favourite</strong></span>
                        </div>
                        <div className="list-content">
                            <i class="fa-solid fa-gear"></i>
                            <span><strong>Settings</strong></span>
                        </div>
                    </div>
                </div>
                <div className="register-content-input">
                    <h1>User profile</h1>
                    <Formik
                        initialValues={{
                            username: "Ben Sherman",
                            email: "ben.sherman@gmail.com",
                            gender: "Male",
                            birthday: {
                                month: "7",
                                day: "30",
                                year: "1999",
                            },
                            language: "en",
                            country: "US",
                            currentPassword: "",
                            newPassword: "",
                            confirmPassword: "",

                        }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .required("Bạn không được bỏ trống."),
                            email: Yup.string()
                                .required("Bạn không được bỏ trống."),
                            currentPassword: Yup.string()
                                .required("Bạn không được bỏ trống.")
                                .min(8, "Mật khẩu hiện tại phải có ít nhất 8 ký tự")
                                .max(32, "Mật khẩu hiện tại không được phép vượt quá 32 ký tự")
                                .matches(
                                    /^(?=.*[A-Za-z])(?=.*\d).*$/,
                                    "Mật khẩu phải bao gồm ít nhất 1 chữ cái và 1 số",
                                ),
                            newPassword: Yup.string()
                                .required("Bạn không được bỏ trống.")
                                .min(8, "Mật khẩu mới phải có ít nhất 8 ký tự")
                                .max(32, "Mật khẩu mới không được phép vượt quá 32 ký tự")
                                .matches(
                                    /^(?=.*[A-Za-z])(?=.*\d).*$/,
                                    "Mật khẩu phải bao gồm ít nhất 1 chữ cái và 1 số",
                                )
                                .notOneOf(
                                    [Yup.ref("currentPassword")],
                                    "Mật khẩu mới không được trùng với mật khẩu hiện tại",
                                ),
                            confirmPassword: Yup.string()
                                .required("Bạn không được bỏ trống.")
                                .oneOf(
                                    [Yup.ref("newPassword")],
                                    "Xác nhận mật khẩu mới không trùng nhau",
                                ),
                        })}

                        onSubmit={
                            (values) => {
                                console.log(values);
                            }
                        }
                    >
                        {({ errors, touched }) => (

                            <Form>
                                <div className="input-left">
                                    <label htmlFor="Username">Username</label><br />
                                    <Field className="input" type="text" name="username" id="username" />
                                    {errors.username && touched.username && (<p style={{ color: 'red', fontSize: '15px' }}>{errors.username}</p>)}
                                    <br /><br />
                                    <label htmlFor="Email">Email</label><br />
                                    <Field className="input" type="text" name="email" id="email" />
                                    {errors.email && touched.email && (<p style={{ color: 'red', fontSize: '15px' }}>{errors.email}</p>)}
                                    <br /><br />
                                    <label htmlFor="">Gender</label><br />
                                    <Field className="input" as="select" name="gender" id="gender">
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                    </Field>
                                    <br /><br />
                                    <label htmlFor="">Birthday</label><br />
                                    <div className="birthday-input">

                                        <Field
                                            className="birthday"
                                            as="select"
                                            name="birthday.month"
                                            id="birthday-month"
                                        >
                                            {date.months.map((month) => (
                                                <option key={month.number} value={month.number}>
                                                    {month.name}
                                                </option>
                                            ))}
                                        </Field>
                                        <Field
                                            className="birthday"
                                            as="select"
                                            name="birthday.day"
                                            id="birthday-day"
                                        >
                                            {date.days.map((day) => (
                                                <option key={day} value={day}>
                                                    {day}
                                                </option>
                                            ))}
                                        </Field>
                                        <Field
                                            className="birthday"
                                            as="select"
                                            name="birthday.year"
                                            id="birthday-year"
                                        >
                                            {date.years.map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </Field>

                                    </div> <br />
                                    <label htmlFor="">Language</label><br />
                                    <Field className="input" as="select" name="language" id="language">
                                        <option value="English">English</option>
                                        <option value="Vietnamese">Vietnamese</option>
                                        <option value="China">China</option>
                                        <option value="US">US</option>
                                    </Field><br /><br />
                                    <label htmlFor="">Country</label><br />
                                    <Field className="input" as="select" name="country" id="country">
                                        <option value="Viet Nam">Viet nam</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Germany">Germany</option>
                                        <option value="England">England</option>
                                    </Field><br />
                                </div>

                                <div className="input-right">
                                    <label htmlFor="">Current Password</label><br />
                                    <Field className="input" type="text" name="currentPassword" id="currentpassword" />
                                    {errors.currentPassword && touched.currentPassword && (<p style={{ color: 'red', fontSize: '15px' }}>{errors.currentPassword}</p>)}<br /><br />

                                    <label htmlFor="">New Password</label><br />
                                    <Field className="input" type="text" name="newPassword" id="newPassword" />
                                    <p>(4-32 alphabets or numerics)</p>
                                    {errors.newPassword && touched.newPassword && (<p style={{ color: 'red', fontSize: '15px' }}>{errors.newPassword}</p>)}
                                    <br />
                                    <label htmlFor="">Confirm Password</label><br />
                                    <Field className="input" type="text" name="confirmPassword" id="confirmPassword" />
                                    {errors.confirmPassword && touched.confirmPassword && (<p style={{ color: 'red', fontSize: '15px' }}>{errors.confirmPassword}</p>)}<br /><br /><br />
                                    <div className="toggle">
                                        <p>Email notification</p>
                                        <div className="toggle-container" onClick={handleToggle1}>
                                            <div className={`toggle-btn ${!toggle1 ? "disable" : ''}`}></div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="toggle">
                                        <p>Private Account</p>
                                        <div className="toggle-container" onClick={handleToggle2}>
                                            <div className={`toggle-btn ${toggle2 ? "disable" : ''}`}></div>
                                        </div>
                                    </div><br />
                                    <button type="submit">Save Changes</button>
                                </div>

                            </Form>


                        )}
                    </Formik>

                </div>
            </div>
        </div>
    )
}
export default memo(Register)