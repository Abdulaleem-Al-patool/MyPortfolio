

import { socials } from "../data/socials";
import "./SocialButton.css";


export default function SocialButton() {
  return (
    <div className="social-container">
      <div className="social-main">
        <div className="social-background" />

        {socials.map(({ name, Icon, color, url }, index) => (
          <a
            key={index}
            href={url}
            className="social-card"
            aria-label={name}
            style={{ "--social-color": color }}
            target={url.startsWith("http") ? "_blank" : undefined}
            rel={url.startsWith("http") ? "noreferrer" : undefined}
          >
            <Icon size={24} strokeWidth={1.8} />
          </a>
        ))}

        <p className="social-text">
          HOVER
          <br /><br />
          FOR
          <br /><br />
          SOCIAL
        </p>
      </div>
    </div>
  );
}
