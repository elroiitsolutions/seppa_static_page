/**
 * Helper to pick only specific namespaces from the full messages object.
 * This prevents serializing the entire ~1.2MB translation dictionary into the HTML of every page.
 */
export function pickMessages(messages: Record<string, any>, namespaces: string[]) {
  const picked: Record<string, any> = {};
  const commonNamespaces = ['header', 'footer']; // Always include layout namespaces
  const allNamespaces = [...new Set([...commonNamespaces, ...namespaces])];

  for (const ns of allNamespaces) {
    if (messages[ns]) {
      picked[ns] = messages[ns];
    }
  }
  return picked;
}
