// import { socials } from "../data/socials";
// import "./SocialButton.css";

// export default function SocialButton() {
//   const count = socials.length;

//   return (
//     <div className="social-container">
//       <div className="social-main">
//         <div className="social-background" />

//         {socials.map(({ name, Icon, color, url }, index) => {
//           const isExternal = url.startsWith("http");
//           return (
//             <a
//               key={name}
//               href={url}
//               className="social-card"
//               aria-label={name}
//               style={{
//                 "--social-color": color,
//                 "--a": `${(360 / count) * index}deg`,
//               }}
//               target={isExternal ? "_blank" : undefined}
//               rel={isExternal ? "noreferrer noopener" : undefined}
//             >
//               <Icon size={20} strokeWidth={1.8} />
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import { Share2 } from "lucide-react";
import { socials } from "../data/socials";
import "./SocialButton.css";

export default function SocialButton() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const count = socials.length;

  // إغلاق عند الضغط خارج المكوّن أو عند Escape (يفيد على اللمس)
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`social-container ${open ? "is-open" : ""}`}
    >
      <div className="social-main">
        <button
          type="button"
          className="social-background"
          aria-label="Social links"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Share2 size={22} strokeWidth={1.8} aria-hidden="true" />
        </button>

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