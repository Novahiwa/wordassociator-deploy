"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const HeroForm = () => {
  Swal.fire({
    icon: "warning",
    title: "warning",
    text: "form submission not working. Please try again later.",
  });
  let join = true;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
      reason: "",
      agree: false, // checkbox field
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Too short!")
        .max(40, "Too long!")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      role: Yup.string().required("Role is required"),
      reason: Yup.string()
        .min(10, "Reason must be at least 10 characters")
        .required("Reason is required"),
      agree: Yup.boolean().oneOf(
        [true],
        "You must agree to the terms and conditions"
      ),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      Swal.fire({
        title: "Submitting...",
        text: "Please wait while we process your application.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      try {
        const response = await fetch("https://wam.kesug.com/join.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(values),
        });

        const result = await response.json();
        console.log("Server response:", result);

        if (response.ok && result.success) {
          Swal.fire({
            icon: "success",
            title: "Application Sent!",
            text: "We’ve received your application. Check your email for confirmation.",
          });
          resetForm();
        } else {
          Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text:
              result.message || "Something went wrong. Please try again later.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Unexpected error occurred",
          text: "Unable to reach the server. Please try again later...",
        });
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleShowTerms = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Terms and Conditions",
      html: `
    <div style="text-align: left; font-family: Arial, sans-serif; color: #333;">
      <p>Welcome to the <strong>Word Associator Dev Team Program</strong>.<br> By joining, you agree to the following terms:</p><br>
      <h3 style="color: #2c3e50;">1. Program Participation</h3>
      
      <p>
  Participation in this program is completely <strong>voluntary and unpaid</strong>. 
  No payment will be given for joining or participating. Contributions are for learning, experience and collaboration only. 
  Any future rewards or benefits are optional and based solely on project contributions, <strong>but joining the program itself will never involve payment</strong>.
</p><br>

      
      <h3 style="color: #2c3e50;">2. Application Approval</h3>
      <p>All applications are subject to review. Approval grants access to team communication channels and project collaboration tools.</p><br>

      <h3 style="color: #2c3e50;">3. Intellectual Property</h3>
      <p>All contributions must be original. You retain rights to your work, but you grant Word Associator permission to use contributions for team projects.</p><br>

      <h3 style="color: #2c3e50;">4. Privacy and Data</h3>
      <p>Your personal information (name, email, role, reason) will only be used for program communications and internal management. We do not share your information with third parties.</p><br>

      <h3 style="color: #2c3e50;">5. Code of Conduct</h3>
      <ul>
        <li>Respect all team members.</li>
        <li>Follow project guidelines.</li>
        <li>Misuse of team resources or communication channels may result in removal from the program.</li>
      </ul><br>

      <h3 style="color: #2c3e50;">6. Liability</h3>
      <p>Participation is voluntary. Word Associator is not liable for any outcomes arising from your participation or contributions.</p><br>

      <p style="margin-top: 15px; font-weight: bold;">By checking the box, you acknowledge that you have read, understood, and agree to these terms and conditions.</p>
    </div>
  `,
      width: 650,
      confirmButtonText: "Close",
      scrollbarPadding: false,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 p-6">
      {join ? (
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full"
          noValidate
        >
          <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
            Join Word Associator Dev Team
          </h1>

          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none transition ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none transition ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Role */}
          <div className="mb-5">
            <label
              htmlFor="role"
              className="block text-gray-700 font-semibold mb-2"
            >
              Role <span className="text-red-600">*</span>
            </label>
            <select
              id="role"
              name="role"
              className={`w-full px-4 py-3 border rounded-md focus:outline-none transition ${
                formik.touched.role && formik.errors.role
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...formik.getFieldProps("role")}
            >
              <option value="">-- Select your role --</option>
              <option value="front-end developer">Front-End Developer</option>
              <option value="back-end developer">Back-End Developer</option>
              <option value="full stack developer">Full Stack Developer</option>
              <option value="mobile app developer">Mobile App Developer</option>
              <option value="game developer">Game Developer</option>
              <option value="api developer">API Developer</option>
              <option value="ui ux designer">UI/UX Designer</option>
              <option value="graphic designer">Graphic Designer</option>
              <option value="web designer">Web Designer</option>
              <option value="motion graphics designer">
                Motion Graphics Designer
              </option>
              <option value="brand designer">Brand Designer</option>
              <option value="technical writer">Technical Writer</option>
              <option value="content creator">Content Creator</option>
              <option value="social media manager">Social Media Manager</option>
              <option value="product manager">Product Manager</option>
              <option value="business analyst">Business Analyst</option>
              <option value="marketing strategist">Marketing Strategist</option>
              <option value="data analyst">Data Analyst</option>
              <option value="data scientist">Data Scientist</option>
              <option value="machine learning engineer">
                Machine Learning Engineer
              </option>
              <option value="ai researcher">AI Researcher</option>
              <option value="qa tester">QA Tester</option>
              <option value="security tester">Security Tester</option>
              <option value="customer support lead">
                Customer Support Lead
              </option>
              <option value="technical support specialist">
                Technical Support Specialist
              </option>
              <option value="recruiter">Recruiter / Talent Scout</option>
              <option value="finance manager">Finance & Budget Manager</option>
              <option value="legal advisor">Legal/Compliance Advisor</option>
            </select>
            {formik.touched.role && formik.errors.role && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.role}</p>
            )}
          </div>

          {/* Reason */}
          <div className="mb-6">
            <label
              htmlFor="reason"
              className="block text-gray-700 font-semibold mb-2"
            >
              Reason <span className="text-red-600">*</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4"
              placeholder="Why do you want to join the Word Associator Dev Team?"
              className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none transition ${
                formik.touched.reason && formik.errors.reason
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              {...formik.getFieldProps("reason")}
            />
            {formik.touched.reason && formik.errors.reason && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.reason}
              </p>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agree"
                className="form-checkbox h-5 w-5 text-blue-600"
                {...formik.getFieldProps("agree")}
              />
              <span className="ml-2 text-gray-700">
                agree to our{" "}
                <a href="#" className="text-blue-500" onClick={handleShowTerms}>
                  terms and conditions
                </a>
              </span>
            </label>
            {formik.touched.agree && formik.errors.agree && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.agree}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={`w-full py-3 rounded-md text-white font-bold transition ${
              formik.isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600"
            }`}
          >
            {formik.isSubmitting ? "Submitting..." : "Join Now"}
          </button>
        </form>
      ) : (
        <div className="bg-white p-8 md:p-12 rounded max-w-[400px] shadow">
          <h1 className="text-2xl font-bold text-red-500 mb-4">
            Applications Closed
          </h1>
          <p className="text-[var(--dark)] mb-4">
            Thank you to everyone who applied to join the Word Associator Dev
            Team. The application process is now complete and all submissions
            have been processed. Selected applicants will receive an email soon
            with the next steps.
          </p>
          <p className="text-[var(--dark)]">
            We appreciate your interest and encourage you to stay connected for
            future opportunities.
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroForm;
