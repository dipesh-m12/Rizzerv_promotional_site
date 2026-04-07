/**
 * Promo-site download attribution → `marketplace_filter_usage`
 * (filter_name: downloadSource, provider_type: promo).
 * POST /gateway/marketplace/filter-usage/append
 */

export type DownloadSourceKey = "instagram" | "google" | "direct";

function gatewayBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_RIZZERV_GATEWAY_BASE_URL || "";
  return raw.replace(/\/$/, "");
}

export async function logDownloadSourceClick(
  selected: DownloadSourceKey,
): Promise<void> {
  const base = gatewayBaseUrl();
  if (!base) return;
  try {
    await fetch(`${base}/marketplace/filter-usage/append`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filterName: "downloadSource",
        selectedFilter: selected,
        providerType: "promo",
        branchside: false,
      }),
    });
  } catch {
    /* analytics only */
  }
}
