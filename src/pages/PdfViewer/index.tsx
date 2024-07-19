import "./PdfViewer.css";

const SandboxValues = [
  // "allow-downloads",
  // "allow-forms",
  // "allow-modals",
  // "allow-orientation-lock",
  // "allow-pointer-lock",
  // "allow-popups",
  // "allow-popups-to-escape-sandbox",
  // "allow-presentation",
  // "allow-same-origin",
  "allow-scripts",
  // "allow-storage-access-by-user-activation",
  // "allow-top-navigation",
  // "allow-top-navigation-by-user-activation",
  // "allow-top-navigation-to-custom-protocols",
];

export function PdfViewer({ src }: { src: string }) {
  return (
    <iframe
      // sandbox={SandboxValues.join(" ")}
      // referrerPolicy={"no-referrer"}
      className="PdfViewer"
      src={`${src}#toolbar=0`}
    />
  );
}
