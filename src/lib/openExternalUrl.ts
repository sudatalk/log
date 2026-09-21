/**
 * Opens an external URL in a new tab/window (PC + mobile webview).
 * Prefers window.open on user gesture; falls back to a synthetic <a target="_blank">
 * when the webview blocks popups.
 */
export function openExternalUrl(url: string) {
  if (typeof window === "undefined" || !url) return;

  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.opener = null;
    return;
  }

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
