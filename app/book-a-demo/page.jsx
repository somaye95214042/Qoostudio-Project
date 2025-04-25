"use client";
import { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // handle form submission logic here
  };

  const inputClass =
    "mt-1 w-full text-black pb-[10px] border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 bg-transparent";

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center w-full h-screen bg-white pt-[500px]">
      <div className="w-2/3 flex-col pr-[120px]">
        <h1 className="text-black text-[50px] font-semibold">
          با هم در ارتباط باشیم!
        </h1>

        <h2 className="text-black text-[20px] font-semibold">
          تجسم استودیو QOO که بازی را تغییر می دهد، در خط مقدم صنعت، در کلاسی
          خاص قرار دارد.
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl py-[50px]">
          <div className="flex flex-col gap-4">
            <div className="pb-[25px]">
              <label className="block text-[20px] font-semibold text-black">
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
            <div className="pb-[30px]">
              <label className="block text-[20px] font-semibold text-black">
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

          <div className="pb-[30px]">
            <label className="block text-[20px] font-semibold text-black">
              نام شرکت
            </label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="pb-[30px]">
              <label className="block text-[20px] font-semibold text-black">
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
            <div className="pb-[30px]">
              <label className="block text-[20px] font-semibold text-black">
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

          <div className="pb-[50px]">
            <label className="block text-[20px] font-semibold text-black pb-[20px]">
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

          <div className="pb-[30px]">
            <label className="block text-[20px] font-semibold text-black">
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
                {" "}
                من با قوانین و مقررات موافقم
              </span>
            </label>
          </div>

          {/* <div className="pt-4">
            <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 text-center text-gray-500">
              [reCAPTCHA goes here]
            </div>
          </div> */}

          <button
            type="submit"
            className="w-1/4 bg-[#ff7a59] text-white py-2 px-4 hover:bg-[#ff7a59] transition text-[20px] font-semibold"
          >
            ارسال
          </button>
        </form>
      </div>
      <div className="w-1/3 relative overflow-hidden h-screen">
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
  );
};

export default BookADemo;
