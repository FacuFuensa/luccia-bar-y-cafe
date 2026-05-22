import { cn, formatPrice } from './utils'

describe('cn', () => {
  it('joins multiple strings', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })
  it('filters out falsy values', () => {
    expect(cn('a', undefined, null, false, 'b')).toBe('a b')
  })
  it('returns empty string for all falsy', () => {
    expect(cn(undefined, null, false)).toBe('')
  })
  it('handles empty string argument', () => {
    expect(cn('a', '', 'b')).toBe('a b')
  })
})

describe('formatPrice', () => {
  it('formats 14000 as $14.000', () => {
    expect(formatPrice(14000)).toBe('$14.000')
  })
  it('formats 3700 as $3.700', () => {
    expect(formatPrice(3700)).toBe('$3.700')
  })
  it('formats 1800 as $1.800', () => {
    expect(formatPrice(1800)).toBe('$1.800')
  })
  it('formats values under 1000 without separator', () => {
    expect(formatPrice(500)).toBe('$500')
  })
})
