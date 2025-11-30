"use client";

import { useForm } from "react-hook-form";
import InputField from "../ui/InputField";
import { FiArrowRight } from "react-icons/fi";
import SmartButton from "../ui/Button";

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    gender: string;
    age: string;
    file: FileList;
}

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="w-full max-w-4xl mx-auto  bg-white border border-[#F3D4D8] rounded-2xl p-4 shadow-sm">
            <h2 className="text-[clamp(10px,3vw,14px)] font-semibold mb-6">Begin Your Musical Journey</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
            >
                {/* First Name */}
                <InputField
                    label="First Name"
                    placeholder="Enter your First Name"
                    register={register("firstName", { required: "First name is required" })}
                    error={errors.firstName?.message}
                />

                {/* Last Name */}
                <InputField
                    label="Last Name"
                    placeholder="Enter your Last Name"
                    register={register("lastName", { required: "Last name is required" })}
                    error={errors.lastName?.message}
                />

                {/* Phone Number */}
                <InputField
                    label="Phone Number"
                    placeholder="Enter your Phone Number"
                    register={register("phone", { required: "Phone number is required" })}
                    error={errors.phone?.message}
                />

                {/* Email */}
                <InputField
                    label="Email Address"
                    placeholder="Enter your Email Address"
                    register={register("email", { required: "Email is required" })}
                    error={errors.email?.message}
                />

                {/* City */}
                <div>
                    <label className="text-[clamp(10px,3vw,10px)] font-medium">City</label>
                    <select
                        className="w-full mt-1 px-2 text-[clamp(10px,3vw,10px)] py-3 border border-gray-300 rounded-xl"
                        {...register("city", { required: "City is required" })}
                    >
                        <option value="">Select City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>

                    {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                </div>

                {/* Gender */}
                <div>
                    <label className="text-[clamp(10px,3vw,10px)] font-medium">Gender</label>
                    <select
                        className="w-full mt-1 px-2 py-3 text-[clamp(10px,3vw,10px)] border border-gray-300 rounded-xl"
                        {...register("gender", { required: "Gender is required" })}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
                </div>

                {/* Age */}
                <InputField
                    label="Age Category"
                    placeholder="Enter your Age"
                    register={register("age", { required: "Age is required" })}
                    error={errors.age?.message}
                    className="col-span-2"
                />

                {/* Upload File */}
                <div className="col-span-2">
                      <InputField
                      label="Upload Audio/Video (optional)"
                      placeholder="Upload Link"
                        type="text"
                         register={register("file")}
                        className="w-full  rounded-xl"
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-2 mt-4">
                    <SmartButton type="submit" text="Submit"
                        className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full"
                    />
                    
                 
                </div>
            </form>
        </div>
    );
}
