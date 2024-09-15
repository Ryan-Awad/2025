import process from 'node:process'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

import { sharedEnv } from '../shared'

export const envWebsiteDb = createEnv({
  extends: [sharedEnv],
  server: {
    DATABASE_URL: z.string().url().startsWith('postgres'),
  },
  experimental__runtimeEnv: {},
  emptyStringAsUndefined: true,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})