import { withPageLoader } from "../components/loading/withPageLoader";
import ContactPage from "../components/contact/ContactPage";

function ContactInner() {
  return <ContactPage />;
}

export const Contact = withPageLoader(ContactInner);
