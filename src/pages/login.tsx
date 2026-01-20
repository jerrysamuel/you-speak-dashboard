import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Login() {
  const navigate = useNavigate();

  const loginAsSchool = () => {
    localStorage.clear();
    localStorage.setItem("role", "school");
    navigate("/school/dashboard");
  };

  const loginAsTeacher = () => {
    localStorage.clear();
    localStorage.setItem("role", "teacher");
    navigate("/teacher/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-2">Welcome to YOU Speak</h1>
        <p className="text-gray-500 mb-6">
          Choose how you want to continue
        </p>

        <div className="flex gap-4">
  <button
    onClick={loginAsSchool}
    className="flex-1 h-16 border-2 border-purple-600 bg-white text-purple-600 font-semibold rounded-md hover:bg-purple-50 transition"
  >
    Login as School Management
  </button>

  <button
    onClick={loginAsTeacher}
    className="flex-1 h-16 border-2 border-purple-600 bg-white text-purple-600 font-semibold rounded-md hover:bg-purple-50 transition"
  >
    Login as Teacher
  </button>
</div>

      </div>
    </div>
  );
}
