"use client";

import { useForm } from "react-hook-form";
import InputField from "../ui/InputField";
import SmartButton from "../ui/Button";
import axios from "axios";
import toast from "react-hot-toast";

interface FormData {
    firstName: string;
    lastName: string;
    callingNumber: string;
    email: string;
    city: string;
    gender: string;
    age: string;
    file: string;
}

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            // Convert age from string to number and map file to videoLink
            const payload: any = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                callingNumber: data.callingNumber,
                city: data.city,
                gender: data.gender,
                age: Number(data.age)
            };

            // Only include videoLink if it's a non-empty string
            if (data.file && data.file.trim() !== "") {
                payload.videoLink = data.file.trim();
            }

            const response = await axios.post(
                "http://localhost:8000/api/user/register",
                payload
            );

            if (response.data.message === "User created successfully") {
                toast.success("Registered Successfully!");
                reset(); // reset form
            } else {
                toast.error(response.data.message || "Registration failed");
            }
        } catch (error: any) {
            // Handle validation errors from server
            const errorMessage = error.response?.data?.error || error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage);
        }
    };

    return (
        <div className="w-full md:max-w-4xl mx-auto bg-white border border-[#F3D4D8] rounded-2xl p-4 shadow-sm">
            <h2 className="text-[clamp(10px,3vw,14px)] font-semibold mb-6">
                Begin Your Musical Journey
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" flex flex-col gap-5"
            >
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <InputField
                        label="First Name"
                        placeholder="Enter your First Name"
                        register={register("firstName", { required: "First name is required" })}
                        error={errors.firstName?.message}
                    />

                    <InputField
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        register={register("lastName", { required: "Last name is required" })}
                        error={errors.lastName?.message}
                    />
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">


                    <InputField
                        label="callingNumber Number"
                        placeholder="Enter your callingNumber Number"
                        register={register("callingNumber", { required: "callingNumber number is required" })}
                        error={errors.callingNumber?.message}
                    />

                    <InputField
                        label="Email Address"
                        placeholder="Enter your Email Address"
                        register={register("email", { required: "Email is required" })}
                        error={errors.email?.message}
                    />
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                        <label className="text-[clamp(10px,3vw,14px)] font-medium">City</label>
                        <select
                            className="w-full mt-1 px-2 text-[clamp(10px,3vw,14px)] py-3 border border-gray-300 rounded-xl"
                            {...register("city", { required: "City is required" })}
                        >
                            <option value="">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                        {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
                    </div>

                    <div>
                        <label className="text-[clamp(10px,3vw,14px)] font-medium">Gender</label>
                        <select
                            className="w-full mt-1 px-2 py-3 text-[clamp(10px,3vw,14px)] border border-gray-300 rounded-xl"
                            {...register("gender", { required: "Gender is required" })}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
                    </div>
                </div>

                <InputField
                    type="number"
                    label="Age Category"
                    placeholder="Enter your Age"
                    register={register("age", {
                        required: "Age is required",
                        validate: (value) => {
                            const numValue = Number(value);
                            if (isNaN(numValue)) {
                                return "Age must be a valid number";
                            }
                            if (numValue < 10) {
                                return "Age must be at least 10";
                            }
                            return true;
                        }
                    })}
                    error={errors.age?.message}
                    className="col-span-2"
                />

                <div className="col-span-2">
                    <InputField
                        label="Upload Audio/Video (optional)"
                        placeholder="Upload Link"
                        type="text"
                        register={register("file")}
                        className="w-full rounded-xl"
                    />
                </div>

                <div className="col-span-2 mt-4">
                    <SmartButton
                        type="submit"
                        text="Submit"
                        className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full"
                    />
                </div>
            </form>
        </div>
    );
}
