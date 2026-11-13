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
