import { describe, expect, it } from "vitest";
import { articles, experience, profile } from "@/content/portfolio";

describe("portfolio content rules", () => {
  it("lists Kuurojen Lehti stories newest first", () => {
    expect(articles.map((a) => a.issue)).toEqual(["3/2026", "2/2026", "1/2026", "4/2025"]);
  });

  it("shows only Helsinki as the location and no phone number", () => {
    expect(profile.location.fi).toBe("Helsinki");
    expect(profile).not.toHaveProperty("phone");
  });

  it("does not list Kuurojen liitto as a camp-leader organisation", () => {
    const leader = experience.find((j) => j.sub);
    expect(leader?.sub?.some((s) => /kuurojen liitto/i.test(s.org))).toBe(false);
  });
});

describe("paywall", () => {
  it("shows only blurred preview scans of Kuurojen Lehti pages", () => {
    for (const a of articles) expect(a.image).toMatch(/_esikatselu\.jpg$/);
  });
});

describe("copy rules", () => {
  it("does not list deaf culture or corporate and investor communications as interests", async () => {
    const { interests } = await import("@/content/portfolio");
    const fi = interests.map((i) => i.fi);
    expect(fi).not.toContain("Kuurojen kulttuuri ja historia");
    expect(fi).not.toContain("Yritys- ja sijoittajaviestintä");
  });

  it("never mentions listed companies (pörssiyhtiö)", async () => {
    const mod = await import("@/content/portfolio");
    expect(JSON.stringify(mod)).not.toMatch(/pörssiyhti|listed compan/i);
  });

  it("includes the Nostalgiaradio show among the 360journalismia publications", async () => {
    const { otherWork } = await import("@/content/portfolio");
    expect(otherWork.some((w) => w.url.includes("nostalgiaradio-aikamatka-vuoteen-2016"))).toBe(true);
  });
});
