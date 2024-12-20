/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Components
 */

import { ButtonPrimary } from "./Button";
import logo from '../images/logo.svg'
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Rashid-C",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rashid-c/",
  },
  {
    label: "Twitter X",
    href: "/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rashid__rayhan/",
  },
  {
    label: "CodePen",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <a href="https://github.com/Rashid-C">
              <ButtonPrimary
                href="mailto:jsoanu@gmail.com"
                label="Start project"
                icon="chevron_right"
                classes="reveal-up"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">
                Sitemap
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </p>
            </div>

            <div>
              <p className="mb-2 reveal-up">
                Socials
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img
              // src="/images/logo.svg"
              src={logo}
              width={40}
              height={40}
              alt="Logo"
              className=""
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">RASHID_C</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
