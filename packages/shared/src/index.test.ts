import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { formatDate, sleep, generateId } from './index';

describe('formatDate', () => {
  it('应返回 zh-CN 格式的日期字符串', () => {
    const date = new Date(2024, 0, 15); // 2024-01-15
    const result = formatDate(date);
    // zh-CN 格式: "2024/1/15" 或 "2024年1月15日"
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
    expect(result).toContain('2024');
  });

  it('应能正确处理月份和日期', () => {
    const date = new Date(2023, 11, 31); // 2023-12-31
    const result = formatDate(date);
    expect(result).toContain('2023');
    expect(result).toContain('12');
    expect(result).toContain('31');
  });
});

describe('sleep', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('应返回一个 Promise', () => {
    const result = sleep(100);
    expect(result).toBeInstanceOf(Promise);
    vi.runAllTimers();
  });

  it('应在指定时间后 resolve', async () => {
    const promise = sleep(1000);
    vi.advanceTimersByTime(1000);
    await expect(promise).resolves.toBeUndefined();
  });

  it('在时间未到时不应 resolve', () => {
    let resolved = false;
    sleep(1000).then(() => {
      resolved = true;
    });
    vi.advanceTimersByTime(500);
    expect(resolved).toBe(false);
  });
});

describe('generateId', () => {
  it('应返回字符串', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
  });

  it('生成的 ID 长度应合理（> 0）', () => {
    const id = generateId();
    expect(id.length).toBeGreaterThan(0);
  });

  it('每次调用应生成不同的 ID', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId()));
    // 100 次调用结果基本不重复（极低概率重复）
    expect(ids.size).toBeGreaterThan(90);
  });

  it('ID 只包含 [0-9a-z] 字符', () => {
    const id = generateId();
    expect(id).toMatch(/^[0-9a-z]+$/);
  });
});
