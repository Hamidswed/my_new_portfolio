import { WebList } from "../components/projects/web/WebList";
import { withPageLoader } from "../components/loading/withPageLoader";

function WebProjectsInner() {
  return (
    <div className="relative py-8 lg:py-16 lg:mt-12">
      <WebList />
    </div>
  );
}

export const WebProjects = withPageLoader(WebProjectsInner);
