type Payload = Record<string, string>;

export const handleOpenExternalBrowser = (payload: Payload) => {
  if (typeof window !== "undefined" && window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      "" + JSON.stringify({ type: "OPEN_EXTERNAL_URL", payload }),
    );
  }
};
