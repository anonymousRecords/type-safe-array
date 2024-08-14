import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Vitest 설정
    include: ['tests/**/*.test.ts'],
  },
});
