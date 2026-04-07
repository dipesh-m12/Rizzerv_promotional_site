"use client";

import { Instagram, Search, Link2 } from "lucide-react";
import {
  logDownloadSourceClick,
  type DownloadSourceKey,
} from "@/utils/downloadSourceAnalytics";

const btnClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-[#3a3a3a] bg-[#111111] px-4 py-2.5 text-sm text-white transition-colors hover:border-[#C8E645]/60 hover:text-[#C8E645]";

type Props = {
  className?: string;
  /** When false, icons are centered (tablet/mobile). */
  align?: "start" | "center";
};

export function DownloadSourceFooter({
  className = "",
  align = "start",
}: Props) {
  const appStore =
    process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() ||
    "https://apps.apple.com/";
  const playStore =
    process.env.NEXT_PUBLIC_PLAY_STORE_URL?.trim() ||
    "https://play.google.com/store";

  const openAfterLog = (source: DownloadSourceKey) => {
    void logDownloadSourceClick(source);
    const href = source === "google" ? playStore : appStore;
    if (typeof window !== "undefined") {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
    >
      <button
        type="button"
        className={btnClass}
        aria-label="Download via Instagram"
        onClick={() => openAfterLog("instagram")}
      >
        <Instagram className="h-5 w-5 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Instagram</span>
      </button>
      <button
        type="button"
        className={btnClass}
        aria-label="Download via Google"
        onClick={() => openAfterLog("google")}
      >
        <Search className="h-5 w-5 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Google</span>
      </button>
      <button
        type="button"
        className={btnClass}
        aria-label="Direct download"
        onClick={() => openAfterLog("direct")}
      >
        <Link2 className="h-5 w-5 shrink-0" aria-hidden />
        <span className="hidden sm:inline">Direct</span>
      </button>
    </div>
  );
}
