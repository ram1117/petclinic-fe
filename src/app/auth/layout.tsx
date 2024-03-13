interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <section className="min-h-[50vh] flex flex-col justify-center p-8 lg:p-16">
    {children}
  </section>
);

export default AuthLayout;
