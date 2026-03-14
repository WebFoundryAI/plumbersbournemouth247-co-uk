import { describe, it, expect } from 'vitest';
import {
  LOCATIONS,
  INDEXED_LOCATIONS,
  PRIMARY_LOCATION,
  getLocationBySlug,
} from '../../src/data/locations';

describe('Locations Data', () => {
  describe('LOCATIONS array integrity', () => {
    it('contains exactly 9 locations', () => {
      expect(LOCATIONS).toHaveLength(9);
    });

    it('every location has a unique slug', () => {
      const slugs = LOCATIONS.map((l) => l.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
    });

    it('every slug matches URL-safe pattern', () => {
      for (const loc of LOCATIONS) {
        expect(loc.slug).toMatch(/^[a-z0-9-]+$/);
      }
    });

    it('every location has countyOrRegion defined', () => {
      for (const loc of LOCATIONS) {
        expect(loc.countyOrRegion).toBeTruthy();
      }
    });
  });

  describe('PRIMARY_LOCATION', () => {
    it('is "bournemouth"', () => {
      expect(PRIMARY_LOCATION.slug).toBe('bournemouth');
    });

    it('is first in LOCATIONS array', () => {
      expect(LOCATIONS[0]).toBe(PRIMARY_LOCATION);
    });
  });

  describe('INDEXED_LOCATIONS', () => {
    it('contains all 9 locations', () => {
      expect(INDEXED_LOCATIONS).toHaveLength(9);
    });

    it('includes only locations without noindex', () => {
      for (const loc of INDEXED_LOCATIONS) {
        expect(loc.noindex).toBeFalsy();
      }
    });

    it('includes all location slugs', () => {
      const slugs = INDEXED_LOCATIONS.map((l) => l.slug);
      expect(slugs).toContain('bournemouth');
      expect(slugs).toContain('poole');
      expect(slugs).toContain('christchurch');
      expect(slugs).toContain('wimborne');
      expect(slugs).toContain('ferndown');
      expect(slugs).toContain('ringwood');
      expect(slugs).toContain('verwood');
      expect(slugs).toContain('wareham');
      expect(slugs).toContain('swanage');
    });
  });

  describe('getLocationBySlug', () => {
    it('returns correct location for "bournemouth"', () => {
      const loc = getLocationBySlug('bournemouth');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Bournemouth');
    });

    it('returns correct location for "poole"', () => {
      const loc = getLocationBySlug('poole');
      expect(loc).toBeDefined();
      expect(loc!.name).toBe('Poole');
    });

    it('returns undefined for non-existent slug', () => {
      expect(getLocationBySlug('nonexistent')).toBeUndefined();
    });

    it('returns undefined for empty string', () => {
      expect(getLocationBySlug('')).toBeUndefined();
    });
  });
});
