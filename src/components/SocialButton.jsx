import { socials } from "../data/socials";
import "./SocialButton.css";

export default function SocialButton() {
  const count = socials.length;

  return (
    <div className="social-container">
      <div className="social-main">
        <div className="social-background" />

        {socials.map(({ name, Icon, color, url }, index) => {
          const isExternal = url.startsWith("http");
          return (
            <a
              key={name}
              href={url}
              className="social-card"
              aria-label={name}
              style={{
                "--social-color": color,
                "--a": `${(360 / count) * index}deg`,
              }}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer noopener" : undefined}
            >
              <Icon size={20} strokeWidth={1.8} />
            </a>
          );
        })}
      </div>
    </div>
  );
}