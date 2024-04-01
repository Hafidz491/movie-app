import FormRegister from "../fragments/FormRegister";
import AuthLayout from "../layout/AuthLayout";

const RegisterPage = () => {
  return (
    <div className="w-full h-screen bg-hero-pattern bg-blend-darken bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-[400px] h-[500px] bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-md">
        <AuthLayout title="REGISTER" type="Register">
          <FormRegister />
        </AuthLayout>
      </div>
    </div>
  );
};

export default RegisterPage;
