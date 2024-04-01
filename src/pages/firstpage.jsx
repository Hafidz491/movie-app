import FormLogin from "../fragments/FormLogin";
import AuthLayout from "../layout/AuthLayout";

const FirstPage = () => {
  return (
    <div className="w-full h-screen bg-hero-pattern bg-blend-darken bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-[400px] h-[400px] bg-black bg-opacity-20 backdrop-blur-md border border-white border-opacity-20 rounded-md">
        <AuthLayout title="LOGIN" type="login">
          <FormLogin />
        </AuthLayout>
      </div>
    </div>
  );
};

export default FirstPage;
