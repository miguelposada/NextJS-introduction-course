import NewHerokuForm from "@/app/components/NewHerokuForm";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1>Dashboard Title</h1>
      <div>
        <NewHerokuForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
