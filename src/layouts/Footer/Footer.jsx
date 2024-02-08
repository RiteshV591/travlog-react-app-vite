import { FooterLinks } from "./FooterLinks.jsx";
import { SocialMediaIcon } from "./SocialMediaIcon";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="container mx-auto max-w-fit border-t-2">
        <div className="flex flex-col lg:flex-row p-12 lg:gap-10 2xl:justify-between 2xl:px-40">
          <div className="flex flex-col items-start text-left gap-5 py-8 2xl:p-11 2xl:gap-8">
            <img src="../resources/logo.svg" alt="logo" />
            <p className="paragraph-text max-w-72">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            </p>
            <ul className="flex justify-center items-center gap-4">
              <SocialMediaIcon platform="Facebook" />
              <SocialMediaIcon platform="Instagram" />
              <SocialMediaIcon platform="Twitter" />
              <SocialMediaIcon platform="YouTube" />
              <SocialMediaIcon platform="LinkedIn" />
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 py-6 lg:py-8">
            <FooterLinks
              title="Passion"
              items={[
                "Features",
                "Pricing",
                "Case studies",
                "Reviews",
                "Updates",
              ]}
            />
            <FooterLinks
              title="Company"
              items={["About", "Contact us", "Careers", "Culture", "Blog"]}
            />
            <FooterLinks
              title="Support"
              items={[
                "Getting started",
                "Help center",
                "Server status",
                "Report a bug",
                "Chat support",
              ]}
            />

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-matt-black xl:text-2xl">
                Contacts us
              </h2>
              <ul className="text-slate-500 md:text-lg text-wrap">
                <li className="mb-4 flex items-center gap-4 text-wrap">
                  <span className="material-symbols-outlined"> mail </span>
                  <a
                    href="mailto:contact@company.com"
                    className="hover:underline"
                  >
                    contact@company.com
                  </a>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <span className="material-symbols-outlined"> call </span>
                  <a href="" className="hover:underline">
                    (xx) xxxx-xxxx
                  </a>
                </li>
                <li className="mb-4 flex items-center gap-4">
                  <span className="material-symbols-outlined">
                    {" "}
                    location_on{" "}
                  </span>
                  <a href="" className="hover:underline leading-loose">
                    794 Mcallister St San Francisco, 94102
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-2 py-10 mx-10 md:mx-16 lg:mx-24 2xl:mx-48 gap-10 md:flex-row md:justify-between">
          {/* Credits */}
          <p>Copyright &copy; 2024</p>
          {/* rights */}
          <div className="text-wrap">
            <p>
              All Rights Reserved |
              <a href="#" className="text-blue-500">
                Terms and Conditions
              </a>{" "}
              |
              <a href="#" className="text-blue-500">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
