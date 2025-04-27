"use client";
import { useState } from "react";
import Footer from "../components/Footer";

const BookADemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    projectDetails: "",
    agreed: false,
  });
  const [formStatus, setFormStatus] = useState(""); // To manage form submission status

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.projectType
    ) {
      setFormStatus("Submitting...");
      // handle form submission logic here
      console.log("Form submitted:", formData);
      setFormStatus("Thank you for submitting!");
    } else {
      setFormStatus("Please fill out all required fields.");
    }
  };

  const inputClass =
    "mt-1 w-full text-black pb-[10px] border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 bg-transparent";

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center w-full min-h-screen bg-gray-200 py-[120px] md:py-[150px]">
        {/* Form Section */}
        <div className="w-full md:w-2/3 flex-col px-4 md:px-[120px]">
          <h1 className="text-black text-[32px] sm:text-[40px] md:text-[50px] font-semibold mb-4">
            با هم در ارتباط باشیم!
          </h1>

          <h2 className="text-black text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-8">
            تجسم استودیو QOO که بازی را تغییر می دهد، در خط مقدم صنعت، در کلاسی
            خاص قرار دارد.
          </h2>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl py-[50px] space-y-8"
          >
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-[16px] sm:text-[18px] font-semibold text-black">
                  نام
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[16px] sm:text-[18px] font-semibold text-black">
                  نام خانوادگی
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-[16px] sm:text-[18px] font-semibold text-black">
                نام شرکت
              </label>
              <input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-[16px] sm:text-[18px] font-semibold text-black">
                  ایمیل
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[16px] sm:text-[18px] font-semibold text-black">
                  شماره تلفن
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-[16px] sm:text-[18px] font-semibold text-black">
                نوع پروژه
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">یک تایپ را انتخاب کنید</option>
                <option value="web">توسعه وبسایت</option>
                <option value="mobile">توسعه اپلیکشن موبایل</option>
                <option value="design">طراحی</option>
                <option value="other">موارد دیگر</option>
              </select>
            </div>

            <div>
              <label className="block text-[16px] sm:text-[18px] font-semibold text-black">
                جرییات پروژه
              </label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows={2}
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="flex items-start space-x-2 mb-[30px]">
              <input
                name="agreed"
                type="checkbox"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <label className="text-sm">
                <span className="font-semibold text-[#000] text-[15px]">
                  من با قوانین و مقررات موافقم
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full sm:w-1/2 md:w-1/4 bg-[#ff7a59] text-white py-2 px-4 hover:bg-[#ff7a59] transition text-[16px] sm:text-[18px] md:text-[20px] font-semibold"
            >
              ارسال
            </button>
          </form>

          {formStatus && (
            <p className="mt-4 text-center text-lg text-gray-500">
              {formStatus}
            </p>
          )}
        </div>

        {/* Video Section */}
        <div className="w-full md:w-1/3 relative overflow-hidden h-[300px] sm:h-[400px] md:h-screen mt-6 md:mt-0">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://qoostudio.com/wp-content/uploads/2022/09/Qoo-bookdemo.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookADemo;
